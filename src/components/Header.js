// app/components/Header.js
'use client';

import Image from 'next/image';
import Nav from './Nav';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-20 py-5">
      <div className="flex items-center">
        <Link href="/" className="hover:text-bright-yellow transition-colors">
          <Image
            src="/little-lemon-logo.svg"
            alt="Little Lemon Logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <Nav />
    </header>
  );
}
