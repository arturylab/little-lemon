// app/components/Nav.js
'use client';

import Link from 'next/link';

export default function Nav() {
return (
    <nav>
        <ul className="flex space-x-6 text-gray-800">
            <li>
                <Link href="/" className="hover:text-bright-yellow transition-colors">Home</Link>
            </li>
            <li>
                <Link href="/about" className="hover:text-bright-yellow transition-colors">About</Link>
            </li>
            <li>
                <Link href="/reservations" className="hover:text-bright-yellow transition-colors">Reservations</Link>
            </li>
            <li>
                <Link href="/order-online" className="hover:text-bright-yellow transition-colors">Order Online</Link>
            </li>
            <li>
                <Link href="/login" className="hover:text-bright-yellow transition-colors">Login</Link>
            </li>
        </ul>
    </nav>
);
}
