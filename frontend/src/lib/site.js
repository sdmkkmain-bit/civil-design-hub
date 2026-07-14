// Central business info for A.S. Solutions (static site)
export const BRAND = {
  name: "A.S. SOLUTIONS",
  short: "AS",
  tagline: "Modern Kitchen & Furniture",
  owner: "Ankur Singh",
  role: "Founder & Project Lead",
  address: "A.S. Solution, Dombivali East, Tilak Nagar",
  city: "Dombivali East, Maharashtra",
  phone: "8574971297",
  phoneDisplay: "+91 85749 71297",
  whatsapp: "7738600502",
  whatsappIntl: "917738600502",
  email: "ab7854505@gmail.com",
  estd: "Craft since day one",
};

export const WHATSAPP_URL = `https://wa.me/${BRAND.whatsappIntl}?text=${encodeURIComponent(
  "Hello A.S. Solutions, I'd like to discuss an interior / kitchen / civil project."
)}`;
export const TEL_URL = `tel:+91${BRAND.phone}`;
export const MAIL_URL = `mailto:${BRAND.email}?subject=${encodeURIComponent(
  "Project Enquiry — A.S. Solutions"
)}&body=${encodeURIComponent(
  "Hi Ankur,\n\nI'd like to request a quote for the following work:\n\n- Type of work: \n- Location: \n- Approx. timeline: \n- Details: \n\nThank you."
)}`;

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1724582586495-d050726cf354?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxwcmVtaXVtJTIwbGl2aW5nJTIwcm9vbSUyMGludGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc4NDAxNzA0NHww&ixlib=rb-4.1.0&q=85",
  kitchen: "https://images.unsplash.com/photo-1663811396777-05505d999151?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBkYXJrJTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDB8fHx8MTc4NDAxNzA0NHww&ixlib=rb-4.1.0&q=85",
  furniture: "https://images.unsplash.com/photo-1617873228868-f64a54e91a01?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwzfHxjdXN0b20lMjB3b29kZW4lMjBmdXJuaXR1cmUlMjBkZXRhaWx8ZW58MHx8fHwxNzg0MDE3MDQ0fDA&ixlib=rb-4.1.0&q=85",
  civil: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwY29uc3RydWN0aW9uJTIwc2l0ZSUyMGVsZWdhbnR8ZW58MHx8fHwxNzg0MDE3MDQ1fDA&ixlib=rb-4.1.0&q=85",
};

export const SERVICES = [
  {
    num: "01",
    title: "Interior Design",
    desc: "End-to-end spatial design — layouts, materials, lighting and finishes that make a home feel intentional.",
    tags: ["Space Planning", "Lighting", "Finishes"],
    img: IMAGES.hero,
  },
  {
    num: "02",
    title: "Modern Kitchens",
    desc: "Bespoke modular kitchens built for real life — smart storage, premium surfaces and a clean, timeless look.",
    tags: ["Modular", "Storage", "Countertops"],
    img: IMAGES.kitchen,
  },
  {
    num: "03",
    title: "Custom Furniture",
    desc: "Handcrafted wooden furniture and wardrobes made to measure, finished to last for years.",
    tags: ["Wardrobes", "Woodwork", "Bespoke"],
    img: IMAGES.furniture,
  },
  {
    num: "04",
    title: "Electrical Work",
    desc: "Safe, tidy and future-ready electrical fit-outs — wiring, points, fixtures and concealed routing.",
    tags: ["Wiring", "Fixtures", "Safety"],
    img: IMAGES.hero,
  },
  {
    num: "05",
    title: "Civil Works",
    desc: "Every civil job handled — from masonry and plaster to tiling, waterproofing and full renovations.",
    tags: ["Masonry", "Tiling", "Renovation"],
    img: IMAGES.civil,
  },
];
