import { BRAND, IMAGES } from "@/lib/site";
import { Reveal, RevealText } from "./Reveal";

const STATS = [
  { k: "100%", v: "In-house team" },
  { k: "A→Z", v: "Concept to handover" },
  { k: "5", v: "Core disciplines" },
];

const PRINCIPLES = [
  { n: "01", t: "Listen first", d: "We design around how you actually live — not a template." },
  { n: "02", t: "Build honest", d: "Quality materials, clean workmanship, no shortcuts." },
  { n: "03", t: "Finish clean", d: "On-time handover with a space that's ready to enjoy." },
];

export const About = () => (
  <section id="about" className="relative bg-[#141414] py-24 md:py-36">
    <div className="mx-auto max-w-[1400px] px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Portrait / image */}
        <Reveal className="lg:col-span-5" y={60}>
          <div className="relative overflow-hidden rounded-sm h-[420px] md:h-[560px]">
            <img src={IMAGES.furniture} alt="A.S. Solutions craft" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="font-serif text-3xl text-white">{BRAND.owner}</p>
              <p className="font-sans text-sm tracking-wide text-[#d4af37]">{BRAND.role}</p>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-6">
              The studio
            </p>
          </Reveal>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.05] text-[#fafafa]">
            <RevealText text="A small team obsessed with getting the details right." />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl font-sans text-lg text-white/60 leading-relaxed">
              Led by {BRAND.owner}, {BRAND.name} is a modern kitchen, furniture and
              interior workshop based in {BRAND.city}. We handle interior design,
              electrical, civil works and bespoke woodwork — so you deal with one
              accountable team from the first sketch to the final polish.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {STATS.map((s, i) => (
              <Reveal key={s.v} delay={i * 0.08}>
                <p className="font-serif text-4xl md:text-5xl text-gold-gradient">{s.k}</p>
                <p className="mt-1 font-sans text-xs md:text-sm text-white/55">{s.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Principles / manifesto chapters */}
      <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.1} className="border-t border-[#d4af37]/30 pt-6">
            <span className="font-serif text-2xl text-[#d4af37]/50">{p.n}</span>
            <h4 className="mt-3 font-serif text-2xl md:text-3xl text-[#fafafa]">{p.t}</h4>
            <p className="mt-3 font-sans text-white/55 leading-relaxed">{p.d}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
