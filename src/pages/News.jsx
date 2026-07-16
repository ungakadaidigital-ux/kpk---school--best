import { useEffect, useState } from "react";
import PageHero from "../components/ui/PageHero.jsx";
import Card from "../components/ui/Card.jsx";
import { supabase } from "../lib/supabaseClient.js";

const PLACEHOLDER_ITEMS = [
  {
    tag: "ADMISSIONS",
    title: "Admissions open for the new academic year",
    body: "Online inquiries are now being accepted for all classes, Kindergarten through Class X.",
  },
  {
    tag: "EVENTS",
    title: "Annual Day & Sports Day — dates to be announced",
    body: "The school calendar for the term will be published here once finalised.",
  },
  {
    tag: "CIRCULAR",
    title: "Circulars will appear here",
    body: null,
    note: "This list is powered by the news_circulars table — the school office can post updates directly through the Admin Dashboard, no developer required.",
  },
  {
    tag: "GENERAL",
    title: "Holiday list — to be published",
    body: null,
    note: "Add the academic year's holiday calendar here.",
  },
];

export default function News() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadNews() {
      const { data, error } = await supabase
        .from("news_circulars")
        .select("id, title, body, category, published_at")
        .eq("is_active", true)
        .order("published_at", { ascending: false })
        .limit(20);

      if (!cancelled) {
        if (error) {
          // eslint-disable-next-line no-console
          console.warn("news_circulars fetch failed, showing placeholders:", error.message);
          setItems([]);
        } else {
          setItems(data ?? []);
        }
      }
    }

    loadNews();
    return () => {
      cancelled = true;
    };
  }, []);

  const showPlaceholders = !items || items.length === 0;

  return (
    <>
      <PageHero
        kicker="News & Circulars"
        title="Updates from the school office."
        subtitle="Admission announcements, event notices, and circulars — posted directly by the school administration."
        crumbLabel="News"
      />

      <section className="section-paper">
        <div className="wrap">
          <div className="grid-2">
            {showPlaceholders
              ? PLACEHOLDER_ITEMS.map((item) => (
                  <Card key={item.title} tag={item.tag} title={item.title}>
                    {item.body ?? <span className="placeholder-note">{item.note}</span>}
                  </Card>
                ))
              : items.map((item) => (
                  <Card
                    key={item.id}
                    tag={(item.category ?? "NEWS").toUpperCase()}
                    title={item.title}
                  >
                    {item.body}
                  </Card>
                ))}
          </div>
        </div>
      </section>
    </>
  );
}
