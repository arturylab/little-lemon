// app/layout.js
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { Karla } from 'next/font/google';

const karla = Karla({ subsets: ['latin'] });

export const metadata = {
  title: 'Little Lemon | Mediterranean Restaurant',
  description: 'Delicious Mediterranean cuisine made with fresh, local ingredients. Book a reservation online or order takeout today!',
  icons: {
    icon: '/icon.png',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Little Lemon Restaurant Interior',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
