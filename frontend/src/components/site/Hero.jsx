import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { BRAND, IMAGES, WHATSAPP_URL } from "@/lib/site";

const line = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.35 + i * 0.14, ease: [0.16, 1, 0.3, 1] },
  }),
};

const MaskLine = ({ children, i }) => (
  <span className="reveal-mask">
    <motion.span
      className="block"
      variants={line}
      custom={i}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollNext = () => {
    const el = document.getElementById("services");
    if (window.__lenis && el) window.__lenis.scrollTo(el);
    else el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="A.S. Solutions interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/85 via-[#0a0a0a]/70 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[#0a0a0a]/50" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col justify-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-[#d4af37] mb-6"
          data-testid="hero-eyebrow"
        >
          Interiors · Kitchens · Civil · Electrical
        </motion.p>

        <h1
          className="font-serif font-light leading-[0.92] text-[15vw] md:text-[10.5vw] lg:text-[9rem] tracking-tight"
          data-testid="hero-title"
        >
          <MaskLine i={0}>
            <span className="text-[#fafafa]">Spaces made</span>
          </MaskLine>
          <MaskLine i={1}>
            <span className="italic text-gold-gradient">exceptional.</span>
          </MaskLine>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.9 }}
          className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <p className="max-w-md font-sans text-base md:text-lg text-white/70 leading-relaxed">
            {BRAND.name} designs and builds modern kitchens, custom furniture and
            full civil works across {BRAND.city}. One team, from concept to
            handover.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-cta"
            className="group inline-flex items-center gap-3 self-start font-sans text-sm tracking-wide px-7 py-4 rounded-full bg-[#d4af37] text-[#0a0a0a] hover:bg-[#f3e5ab] transition-colors duration-300"
          >
            Start a project
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={scrollNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-[#d4af37] transition-colors"
        data-testid="hero-scroll-cue"
        aria-label="Scroll down"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
};
