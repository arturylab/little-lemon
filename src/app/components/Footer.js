// app/components/Footer.js
import Link from 'next/link';

export default function Footer() {
return (
    <footer className="text-center py-4 mt-10 text-sm text-gray-600">
            <hr className="w-3/4 mx-auto border-gray-300 mb-4" />
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                    <div className="text-left mb-4">
                            <h4 className="text-lg font-semibold mb-2">Navigation</h4>
                            <ul className="text-sm text-gray-400 space-y-1">
                                    <li><Link className="hover:text-bright-yellow transition-colors" href="/">Home</Link></li>
                                    <li><Link className="hover:text-bright-yellow transition-colors" href="/about">About</Link></li>
                                    <li><Link className="hover:text-bright-yellow transition-colors" href="/reservations">Reservations</Link></li>
                                    <li><Link className="hover:text-bright-yellow transition-colors" href="/order-online">Order Online</Link></li>
                                    <li><Link className="hover:text-bright-yellow transition-colors" href="/login">Login</Link></li>
                            </ul>
                    </div>
                    <div className="text-left mb-4">
                            <h4 className="text-lg font-semibold mb-2">Contact</h4>
                            <ul className="text-sm text-gray-400 space-y-1">
                                    <li><Link className="hover:text-bright-yellow transition-colors" href="#">Address</Link></li>
                                    <li><Link className="hover:text-bright-yellow transition-colors" href="#">Phone Number</Link></li>
                                    <li><Link className="hover:text-bright-yellow transition-colors" href="#">Email</Link></li>
                            </ul>
                    </div>
                    <div className="text-left mb-4">
                            <h4 className="text-lg font-semibold mb-2">Social Media Links</h4>
                            <ul className="text-sm text-gray-400 space-y-1">
                                    <li><Link className="hover:text-bright-yellow transition-colors" href="#">Facebook</Link></li>
                                    <li><Link className="hover:text-bright-yellow transition-colors" href="#">Instagram</Link></li>
                                    <li><Link className="hover:text-bright-yellow transition-colors" href="#">Twitter</Link></li>
                            </ul>
                    </div>
            </div>
            <div className='text-center text-gray-400'>
                    {new Date().getFullYear()} Little Lemon. All rights reserved.
            </div>
    </footer>
);
}
