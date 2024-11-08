'use client'

import * as React from "react"
import Link from "next/link"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* <img
              className="h-8 w-auto"
              src="/placeholder.svg?height=32&width=32"
              alt="Logo"
            /> */}
            <h2 className="text-gray-300">Picasso</h2>
          </Link>

          {/* Menu toggle button for small screens */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/explore" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Explore
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Sign In and Sign Up Buttons (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <Link href="/login" className="text-gray-300 hover:text-white border border-gray-500 px-4 py-2 rounded-md">
              Login
            </Link>
            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Link href="/about" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link href="/explore" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Explore
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/signup" className="w-full text-gray-300 hover:text-white border border-gray-500 px-4 py-2 rounded-md">
                Sign Up
              </Link>
              <Link href="/signin" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
