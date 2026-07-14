import QRCode from "react-qr-code";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { BRAND, WHATSAPP_URL, TEL_URL, MAIL_URL } from "@/lib/site";
import { Reveal, RevealText } from "./Reveal";

const Detail = ({ icon: Icon, label, value, href, testid }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    data-testid={testid}
    className="group flex items-start gap-4 py-4 border-b border-white/10 hover:border-[#d4af37]/50 transition-colors"
  >
    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0a0a0a] transition-colors">
      <Icon size={17} />
    </span>
    <span>
      <span className="block font-sans text-xs tracking-[0.25em] uppercase text-white/45">{label}</span>
      <span className="block font-sans text-lg text-[#fafafa] group-hover:text-[#d4af37] transition-colors">{value}</span>
    </span>
  </a>
);

export const Contact = () => (
  <section id="contact" className="relative bg-[#0a0a0a] py-24 md:py-36 border-t border-white/10">
    <div className="mx-auto max-w-[1400px] px-6 md:px-12">
      <div className="max-w-4xl">
        <Reveal>
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-6">
            Get in touch
          </p>
        </Reveal>
        <h2 className="font-serif font-light leading-[0.95] text-6xl md:text-8xl lg:text-9xl text-[#fafafa]">
          <RevealText text="Let's talk" />
        </h2>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-lg font-sans text-lg text-white/60">
            Tell us about your space. Call, WhatsApp or email {BRAND.owner} for a
            free, no-obligation quote.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Details */}
        <Reveal className="lg:col-span-7" y={50}>
          <div>
            <Detail icon={Phone} label="Call" value={BRAND.phoneDisplay} href={TEL_URL} testid="contact-phone" />
            <Detail icon={MessageCircle} label="WhatsApp" value={`+91 ${BRAND.whatsapp}`} href={WHATSAPP_URL} testid="contact-whatsapp" />
            <Detail icon={Mail} label="Email" value={BRAND.email} href={MAIL_URL} testid="contact-email" />
            <Detail
              icon={MapPin}
              label="Studio"
              value={BRAND.address}
              href={`https://www.google.com/maps/search/${encodeURIComponent(BRAND.address)}`}
              testid="contact-address"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-cta-whatsapp"
              className="inline-flex items-center gap-2 font-sans text-sm tracking-wide px-7 py-4 rounded-full bg-[#d4af37] text-[#0a0a0a] hover:bg-[#f3e5ab] transition-colors"
            >
              <MessageCircle size={17} /> Message on WhatsApp
            </a>
            <a
              href={MAIL_URL}
              data-testid="contact-cta-email"
              className="inline-flex items-center gap-2 font-sans text-sm tracking-wide px-7 py-4 rounded-full border border-white/25 text-[#fafafa] hover:border-[#d4af37] hover:text-[#d4af37] transition-colors"
            >
              <Mail size={17} /> Request a quote
            </a>
          </div>
        </Reveal>

        {/* QR card */}
        <Reveal className="lg:col-span-5" y={50} delay={0.1}>
          <div
            className="rounded-2xl border border-white/10 bg-[#141414] p-8 md:p-10"
            data-testid="whatsapp-qr-card"
          >
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-6">
              Scan to chat on WhatsApp
            </p>
            <div className="bg-white p-5 rounded-xl w-fit mx-auto">
              <QRCode
                value={WHATSAPP_URL}
                size={200}
                fgColor="#0a0a0a"
                bgColor="#ffffff"
                data-testid="whatsapp-qr"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="font-serif text-2xl text-[#fafafa]">{BRAND.owner}</p>
              <p className="font-sans text-sm text-white/50">+91 {BRAND.whatsapp}</p>
              <p className="mt-3 font-sans text-xs text-white/40">
                Point your phone camera at the code to start a chat instantly.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
