import Header from '@/components/Header';
import CTA from '@/sections/CTA';
import Footer from '@/sections/Footer';
import Hero from '@/sections/Hero';
import Portfolio from '@/sections/Portfolio';
import Process from '@/sections/Process';
import Services from '@/sections/Services';
import Testimonials from '@/sections/Testimonials';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
