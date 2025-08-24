import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white">Powerplay</h2>
                    <p className="mt-2 text-gray-400">
                        Your trusted shop for premium sports accessories.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="mt-3 space-y-2">
                        <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                        <li><Link href="/products" className="hover:text-blue-400">Products</Link></li>
                        <li><Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                    <div className="flex space-x-4 mt-3">
                        <a href="#" className="hover:text-blue-400">Facebook</a>
                        <a href="#" className="hover:text-blue-400">Twitter</a>
                        <a href="#" className="hover:text-blue-400">Instagram</a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Powerplay. All rights reserved.
            </div>
        </footer>
    );
}
