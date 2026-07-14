import { IMAGES } from "@/lib/site";
import { Reveal } from "./Reveal";

// Asymmetric editorial gallery
export const Gallery = () => (
  <section id="gallery" className="relative bg-[#0a0a0a] py-24 md:py-32 border-t border-white/10">
    <div className="mx-auto max-w-[1400px] px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
        <div>
          <Reveal>
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-5">
              Selected work
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-5xl md:text-7xl font-light text-[#fafafa] leading-none">
              The gallery
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="max-w-sm font-sans text-white/55 text-base">
            A glimpse of finished kitchens, living spaces and bespoke furniture —
            built with precision, delivered with care.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        <Reveal className="md:col-span-8" y={60}>
          <figure className="relative overflow-hidden rounded-sm h-[300px] md:h-[520px] group">
            <img src={IMAGES.hero} alt="Living space" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <figcaption className="absolute bottom-5 left-5 font-serif text-2xl text-white">Living Spaces</figcaption>
          </figure>
        </Reveal>
        <Reveal className="md:col-span-4" y={60} delay={0.1}>
          <figure className="relative overflow-hidden rounded-sm h-[300px] md:h-[520px] group">
            <img src={IMAGES.furniture} alt="Custom furniture" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <figcaption className="absolute bottom-5 left-5 font-serif text-2xl text-white">Furniture</figcaption>
          </figure>
        </Reveal>
        <Reveal className="md:col-span-5" y={60}>
          <figure className="relative overflow-hidden rounded-sm h-[300px] md:h-[420px] group">
            <img src={IMAGES.civil} alt="Civil works" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <figcaption className="absolute bottom-5 left-5 font-serif text-2xl text-white">Civil Works</figcaption>
          </figure>
        </Reveal>
        <Reveal className="md:col-span-7" y={60} delay={0.1}>
          <figure className="relative overflow-hidden rounded-sm h-[300px] md:h-[420px] group">
            <img src={IMAGES.kitchen} alt="Modern kitchen" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <figcaption className="absolute bottom-5 left-5 font-serif text-2xl text-white">Modern Kitchens</figcaption>
          </figure>
        </Reveal>
      </div>
    </div>
  </section>
);
