import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SERVICES } from "@/lib/site";
import { Reveal, RevealText } from "./Reveal";

const ServiceRow = ({ item, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const flip = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-14 md:py-20 border-t border-white/10"
      data-testid={`service-row-${item.num}`}
    >
      {/* Text block */}
      <div className={`lg:col-span-6 ${flip ? "lg:order-2 lg:pl-10" : "lg:pr-10"}`}>
        <div className="flex items-start gap-6">
          <span className="font-serif text-6xl md:text-8xl leading-none text-[#d4af37]/25 select-none">
            {item.num}
          </span>
          <div className="pt-2">
            <h3 className="font-serif text-4xl md:text-6xl font-light text-[#fafafa] leading-tight">
              <RevealText text={item.title} />
            </h3>
          </div>
        </div>
        <Reveal delay={0.1} className="mt-6 lg:pl-[6.5rem]">
          <p className="max-w-md font-sans text-base md:text-lg text-white/60 leading-relaxed">
            {item.desc}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span
                key={t}
                className="font-sans text-xs tracking-wide uppercase px-3 py-1.5 rounded-full border border-white/15 text-white/60"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Image block — tall clipped frame with parallax + spotlight */}
      <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
        <div className="relative overflow-hidden rounded-sm h-[340px] md:h-[460px] group">
          <motion.img
            style={{ y: imgY }}
            src={item.img}
            alt={item.title}
            className="absolute inset-0 h-[124%] w-full object-cover -top-[12%] transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.18),transparent_60%)]" />
          <span className="absolute bottom-5 left-5 font-sans text-xs tracking-[0.3em] uppercase text-white/80">
            {item.title}
          </span>
        </div>
      </div>
    </div>
  );
};

export const Services = () => (
  <section id="services" className="relative bg-[#0a0a0a] py-24 md:py-36">
    <div className="mx-auto max-w-[1400px] px-6 md:px-12">
      <div className="max-w-3xl mb-8">
        <Reveal>
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-5">
            What we do
          </p>
        </Reveal>
        <h2 className="font-serif text-5xl md:text-7xl font-light leading-[1.02] text-[#fafafa]">
          <RevealText text="Everything your space needs — under one roof." />
        </h2>
      </div>

      <div className="mt-6">
        {SERVICES.map((s, i) => (
          <ServiceRow key={s.num} item={s} index={i} />
        ))}
      </div>
    </div>
  </section>
);
