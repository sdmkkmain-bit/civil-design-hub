import Marquee from "react-fast-marquee";

const ITEMS = [
  "MODERN KITCHEN",
  "FURNITURE",
  "CIVIL WORKS",
  "ELECTRICAL",
  "INTERIOR DESIGN",
];

export const Ticker = () => (
  <section
    className="py-10 md:py-14 border-y border-white/10 bg-[#0a0a0a]"
    data-testid="marquee"
    aria-hidden="true"
  >
    <Marquee speed={38} gradient={false} autoFill>
      {ITEMS.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="font-serif text-5xl md:text-7xl text-white/40 px-8 hover:text-[#d4af37] transition-colors duration-500">
            {t}
          </span>
          <span className="text-[#d4af37] text-3xl md:text-5xl">✦</span>
        </span>
      ))}
    </Marquee>
  </section>
);
