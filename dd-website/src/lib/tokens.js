export const C = {
  gray: "#f5f5f5",
  beige: "#f9f7ef",
  white: "#ffffff",
  lemon: "#e6ff99",
  turquoise: "#caebed",
  seawave: "#537f7b",
  black: "#000000",
  textMuted: "#444444",
  border: "#e0e0e0",
};

// URLs
export const CALENDLY_URL = "https://calendly.com/mika-aho-datadesign/30min";

// Layout
export const CONTAINER_MAX_WIDTH = 1200;
export const SECTION_PADDING = "88px 40px";
export const CARD_BORDER_RADIUS = 20;
export const PILL_BORDER_RADIUS = 100;

// Container style helper
export const containerStyle = (padding = SECTION_PADDING) => ({
  maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding,
});

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Customer Stories", href: "/customer-stories" },
  { label: "Insights", href: "/insights" },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
];

// Suomenkielinen navigaatio. Linkit osoittavat vastaaville /fi-sivuille.
export const NAV_LINKS_FI = [
  { label: "Palvelut", href: "/fi/services" },
  { label: "Ratkaisut", href: "/fi/solutions" },
  { label: "Asiakastarinat", href: "/fi/customer-stories" },
  { label: "Näkemykset", href: "/fi/insights" },
  {
    label: "Yritys",
    children: [
      { label: "Meistä", href: "/fi/company/about" },
      { label: "Ura", href: "/fi/company/careers" },
      { label: "Ota yhteyttä", href: "/fi/company/contact" },
    ],
  },
];

// Footer-linkit kielikohtaisesti
export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Customer Stories", href: "/customer-stories" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/company/about" },
  { label: "Careers", href: "/company/careers" },
  { label: "Contact", href: "/company/contact" },
];

export const FOOTER_LINKS_FI = [
  { label: "Etusivu", href: "/fi" },
  { label: "Palvelut", href: "/fi/services" },
  { label: "Ratkaisut", href: "/fi/solutions" },
  { label: "Asiakastarinat", href: "/fi/customer-stories" },
  { label: "Näkemykset", href: "/fi/insights" },
  { label: "Meistä", href: "/fi/company/about" },
  { label: "Ura", href: "/fi/company/careers" },
  { label: "Ota yhteyttä", href: "/fi/company/contact" },
];

// UI-tekstit kielikohtaisesti
export const UI_TEXTS = {
  en: {
    bookCall: "Book a call",
  },
  fi: {
    bookCall: "Varaa keskustelu",
  },
};
