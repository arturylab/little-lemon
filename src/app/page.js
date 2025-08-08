// app/page.js
import Hero from '@/components/Hero';
import Hightlights from '@/components/Hightlights';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Hightlights />
      <Testimonials />
    </>
  );
}
