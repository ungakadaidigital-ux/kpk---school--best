// Shared site data — navigation links and contact details.
// Contact details fall back to placeholder values if env vars aren't set,
// matching the placeholders used in the approved static design.

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/facilities", label: "Facilities" },
  { to: "/admissions", label: "Admissions" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
];

export const SITE = {
  phone: import.meta.env.VITE_SCHOOL_PHONE || "+910000000000",
  whatsapp: import.meta.env.VITE_SCHOOL_WHATSAPP || "910000000000",
  email: import.meta.env.VITE_SCHOOL_EMAIL || "info@kpkschool.in",
};

