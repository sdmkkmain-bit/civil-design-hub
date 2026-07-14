import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Ticker } from "@/components/site/Ticker";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function Landing() {
  return (
    <main className="bg-[#0a0a0a] text-[#fafafa] font-sans" data-testid="landing-page">
      <Nav />
      <Hero />
      <Ticker />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
