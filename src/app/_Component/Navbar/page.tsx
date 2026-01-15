"use client"; // Required for useState

import Link from 'next/link';
import React, { useState } from 'react';
import logo from '@images/freshcart-logo.svg';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <Image src={logo} alt="Freshcart Logo" priority />
                </Link>

                {/* Mobile Toggle Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>

                {/* Nav Links */}
                <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-green-600 font-bold md:p-0">Home</Link>
                        </li>
                        <li>
                            <Link href="/categories" className="block py-2 px-3 text-gray-900 hover:text-green-600 md:p-0">Categories</Link>
                        </li>
                        <li>
                            <Link href="/products" className="block py-2 px-3 text-gray-900 hover:text-green-600 md:p-0">Products</Link>
                        </li>
                        <li>
                            <Link href="/brands" className="block py-2 px-3 text-gray-900 hover:text-green-600 md:p-0">Brands</Link>
                        </li>
                        <div className="flex flex-col md:flex-row md:space-x-4 border-t md:border-t-0 mt-2 pt-2 md:mt-0 md:pt-0">
                            <li>
                                <Link href="/login" className="block py-2 px-3 text-gray-900 hover:text-green-600 md:p-0">Login</Link>
                            </li>
                            <li>
                                <Link href="/register" className="block py-2 px-3 text-gray-900 hover:text-green-600 md:p-0">Register</Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}