// app/components/Header.js
'use client';

import Image from 'next/image';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-20 py-5">
      <div className="flex items-center">
        <Image
          src="/little-lemon-logo.svg"
          alt="Little Lemon Logo"
          width={100}
          height={100}
          className="mr-3"
        />
      </div>
      <Nav />
    </header>
  );
}
