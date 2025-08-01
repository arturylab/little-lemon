// app/page.js
import { Markazi_Text } from 'next/font/google';

const markazi = Markazi_Text({ subsets: ['latin'] });

export default function HomePage() {
  return (
    <section className="max-w-5xl mx-auto text-center py-12">
      <h1 className={`font-karla text-light-beige text-7xl font-bold mb-4 ${markazi.className}`}>
        Welcome to Little Lemon 🍋
      </h1>
      <p className="text-lg text-gray-700">
        Experience the best Mediterranean cuisine with fresh ingredients and a warm atmosphere.
      </p>
    </section>
  );
}
