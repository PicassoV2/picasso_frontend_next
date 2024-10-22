import React, { useState } from 'react'
import Link from 'next/link'

function Navbar() {
  // State for mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div>
          <Link href="/">
            <span className="text-xl font-bold">Picasso</span>
          </Link>
        </div>

        {/* Right: Menu Items for larger screens */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/about">
            <span className="hover:text-gray-400">About</span>
          </Link>
          <Link href="/event">
            <span className="hover:text-gray-400">Event</span>
          </Link>

          {/* Login Button */}
          <Link href="/login">
            <button className="border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition-colors">
              Login
            </button>
          </Link>

          {/* Register Button */}
          <Link href="/register">
            <button className="border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition-colors">
              Register
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link href="/about">
            <span className="block py-2 px-4 hover:bg-gray-700">About</span>
          </Link>
          <Link href="/event">
            <span className="block py-2 px-4 hover:bg-gray-700">Event</span>
          </Link>
          <Link href="/login">
            <span className="block py-2 px-4 hover:bg-gray-700">Login</span>
          </Link>
          <Link href="/register">
            <span className="block py-2 px-4 hover:bg-gray-700">Register</span>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
