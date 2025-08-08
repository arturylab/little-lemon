import { Button } from "@/components/ui/button"
import { Markazi_Text } from 'next/font/google';
import Image from "next/image";
import Link from 'next/link';

const markazi = Markazi_Text({ subsets: ['latin'] });

export default function Hero() {
  return (
   <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-20 py-5 bg-olive">
      <div className="space-y-6">
        <h1 className={`text-light-gray text-7xl font-bold mb-4 ${markazi.className}`}>
          Little Lemon
        </h1>
        <h2 className={`text-light-beige text-4xl font-bold mb-4 ${markazi.className}`}>Chicago</h2>
        <p className="text-light-gray text-lg">
          We are a family owned Mediterranean restaurant, focused
          on traditional recipes served with a modern twist.
        </p>
        <Button>
            <Link href="/reservations">Reservations</Link>
        </Button>
      </div>

      <div className="w-full h-[300px] md:h-[400px] relative">
        <Image
          src="/restauranfood.jpg"
          alt="Restaurant Food"
          fill
          objectFit="cover"
          className="object-cover rounded-lg shadow-md"
          priority
        />
      </div>
    </section>
  );
}
