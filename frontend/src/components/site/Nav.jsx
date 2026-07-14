import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND, WHATSAPP_URL } from "@/lib/site";

const LINKS = [
  { label: "Work", id: "services" },
  { label: "Gallery", id: "gallery" },
  { label: "Studio", id: "about" },
  { label: "Contact", id: "contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -20 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
      data-testid="site-nav"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 flex items-center justify-between h-20">
        <button
          onClick={() => go("top")}
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
        >
          <span className="font-serif text-2xl font-semibold text-gold-gradient leading-none">
            {BRAND.short}
          </span>
          <span className="hidden sm:block font-sans text-xs tracking-[0.3em] text-white/70 uppercase">
            A.S. Solutions
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`nav-link-${l.id}`}
              className="font-sans text-sm tracking-wide text-white/70 hover:text-white hover-line pb-1"
            >
              {l.label}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-cta"
            className="font-sans text-sm tracking-wide px-5 py-2.5 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors duration-300"
          >
            Get a Quote
          </a>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          data-testid="nav-mobile-toggle"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden overflow-hidden bg-[#0a0a0a] border-t border-white/10"
            data-testid="nav-mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  data-testid={`nav-mobile-link-${l.id}`}
                  className="text-left font-serif text-2xl text-white/90"
                >
                  {l.label}
                </button>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center font-sans text-sm tracking-wide px-5 py-3 rounded-full bg-[#d4af37] text-[#0a0a0a]"
                data-testid="nav-mobile-cta"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
