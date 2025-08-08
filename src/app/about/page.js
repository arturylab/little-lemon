import { Markazi_Text } from 'next/font/google';
import Image from "next/image";

const markazi = Markazi_Text({ subsets: ['latin'] });

export default function About() {
  return (
   <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 items-center px-20 py-5">
      <div className="space-y-6">
        <h1 className={`text-light-dark text-7xl font-bold mb-4 ${markazi.className}`}>
          Little Lemon
        </h1>
        <h2 className={`text-light-dark text-4xl font-bold mb-4 ${markazi.className}`}>Chicago</h2>
        <p className="text-light-dark text-lg">
          Little Lemon is a vibrant Mediterranean restaurant known
          for its fresh, locally sourced ingredients, warm atmosphere,
          and flavorful dishes. Guests enjoy a unique dining
          experience that blends tradition, creativity, and exceptional
          hospitality every time.
        </p>
      </div>

      <div className="w-full h-[300px] md:h-[400px] relative">
        <Image
          src="/chefs.png"
          alt="Chefs preparing food"
          fill
          objectFit="cover"
          className="object-cover rounded-lg shadow-md"
          priority
        />
      </div>
    </section>
  );
}
