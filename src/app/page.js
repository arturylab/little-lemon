// app/page.js
import Hero from '@/components/Hero';
import Hightlights from '@/components/Hightlights';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';


export default function HomePage() {
  return (
    <>
      <Hero />
      <Hightlights />
      <Testimonials />
      <About />
    </>
  );
}
