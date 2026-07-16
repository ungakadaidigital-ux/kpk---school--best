import { useEffect, useState } from "react";
import PageHero from "../components/ui/PageHero.jsx";
import PhotoBlock from "../components/ui/PhotoBlock.jsx";
import { supabase } from "../lib/supabaseClient.js";

const PLACEHOLDER_TILES = [
  { caption: "ANNUAL DAY", tone: "gold" },
  { caption: "SPORTS DAY", tone: "green" },
  { caption: "CLASSROOM ACTIVITY", tone: "paper" },
  { caption: "SCIENCE EXHIBITION", tone: "green" },
  { caption: "INDEPENDENCE DAY", tone: "gold" },
  { caption: "CAMPUS LIFE", tone: "paper" },
];

export default function Gallery() {
  const [media, setMedia] = useState(null); // null = loading, [] = empty, [...] = loaded

  useEffect(() => {
    let cancelled = false;

    async function loadGallery() {
      const { data, error } = await supabase
        .from("gallery_media")
        .select("url, caption, category")
        .order("uploaded_at", { ascending: false })
        .limit(12);

      if (!cancelled) {
        if (error) {
          // Table may not exist yet, or env vars aren't set — fall back
          // to placeholders rather than showing a broken page.
          // eslint-disable-next-line no-console
          console.warn("gallery_media fetch failed, showing placeholders:", error.message);
          setMedia([]);
        } else {
          setMedia(data ?? []);
        }
      }
    }

    loadGallery();
    return () => {
      cancelled = true;
    };
  }, []);

  const showPlaceholders = !media || media.length === 0;

  return (
    <>
      <PageHero
        kicker="Gallery"
        title="A look at everyday life on campus."
        subtitle="Classrooms, events, sports days, and campus moments — updated regularly by the school office."
        crumbLabel="Gallery"
      />

      <section className="section-paper">
        <div className="wrap">
          <div className="grid-3">
            {showPlaceholders
              ? PLACEHOLDER_TILES.map((t) => (
                  <PhotoBlock key={t.caption} caption={t.caption} tone={t.tone} />
                ))
              : media.map((item, i) => (
                  <div className="photo-block" key={item.url ?? i} style={{ backgroundImage: `url(${item.url})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="cap">{item.caption ?? item.category ?? "Gallery"}</div>
                  </div>
                ))}
          </div>
          {showPlaceholders && (
            <p className="placeholder-note" style={{ marginTop: 30 }}>
              This grid reads from the Supabase <code>gallery_media</code>{" "}
              table. It is currently empty, so placeholder tiles are shown
              — upload real event photography through the Admin Dashboard
              (or directly in Supabase Storage) to replace them.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
