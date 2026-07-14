import { BRAND, WHATSAPP_URL, TEL_URL, MAIL_URL } from "@/lib/site";

export const Footer = () => {
  const go = (id) => {
    const el = document.getElementById(id);
    if (window.__lenis && el) window.__lenis.scrollTo(el);
    else el?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10" data-testid="site-footer">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <p className="font-serif text-5xl md:text-6xl text-gold-gradient leading-none">{BRAND.short}</p>
            <p className="mt-4 font-sans text-sm tracking-[0.3em] uppercase text-white/60">{BRAND.name}</p>
            <p className="mt-2 font-sans text-white/45 max-w-sm">{BRAND.tagline} · {BRAND.address}</p>
          </div>

          <div className="md:col-span-3">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Explore</p>
            <ul className="space-y-3">
              {[["Work", "services"], ["Gallery", "gallery"], ["Studio", "about"], ["Contact", "contact"]].map(([l, id]) => (
                <li key={id}>
                  <button onClick={() => go(id)} className="font-sans text-white/70 hover:text-[#d4af37] transition-colors" data-testid={`footer-link-${id}`}>
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Reach us</p>
            <ul className="space-y-3">
              <li><a href={TEL_URL} className="font-sans text-white/70 hover:text-[#d4af37] transition-colors" data-testid="footer-phone">{BRAND.phoneDisplay}</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-sans text-white/70 hover:text-[#d4af37] transition-colors" data-testid="footer-whatsapp">WhatsApp +91 {BRAND.whatsapp}</a></li>
              <li><a href={MAIL_URL} className="font-sans text-white/70 hover:text-[#d4af37] transition-colors break-all" data-testid="footer-email">{BRAND.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/35">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p className="font-sans text-xs text-white/35">Interior · Kitchen · Furniture · Electrical · Civil</p>
        </div>
      </div>
    </footer>
  );
};
