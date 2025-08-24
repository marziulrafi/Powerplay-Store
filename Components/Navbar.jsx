"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <Link href="/" className="text-2xl font-bold text-blue-600">
                        Powerplay
                    </Link>

                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="text-gray-700 hover:text-blue-600">
                            Home
                        </Link>
                        <Link href="/products" className="text-gray-700 hover:text-blue-600">
                            Products
                        </Link>
                        <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
                            Dashboard
                        </Link>
                    </div>

                    <div>
                        {session ? (
                            <div className="flex items-center space-x-3">
                                <span className="text-gray-700 font-medium hidden sm:block">
                                    Hi, {session.user.name}
                                </span>
                                <button
                                    onClick={() => signOut({ callbackUrl: "/" })}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link href="/login">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
