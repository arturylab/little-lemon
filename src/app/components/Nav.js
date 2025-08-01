// app/components/Nav.js
'use client';

import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul className="flex space-x-6 text-gray-800">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/reservations">Reservations</Link></li>
        <li><Link href="/order-online">Order Online</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
