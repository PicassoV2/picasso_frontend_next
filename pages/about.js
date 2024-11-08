'use client'

import Navbar from '@/components/Navbar'
import React from 'react'

export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About Our Painting Bidding Platform</h1>
        <p className="text-lg text-gray-300 mb-6">
          Welcome to our innovative painting bidding platform where artists and collectors come together to showcase, bid, and purchase unique works of art.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-400">
              We aim to provide a transparent, efficient, and user-friendly platform for artists to auction their paintings, and for art enthusiasts to discover unique pieces at competitive prices.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
            <p className="text-gray-400">
              Our platform allows users to place bids on paintings from various genres and styles. Sellers can set the minimum bid amount, and buyers can compete by placing higher bids until the auction closes.
            </p>
          </div>
        </div>

        <div className="mt-[20%] mb-[20%] text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Us Today</h2>
          <p className="text-gray-400 mb-6">
            Whether you're an artist looking to showcase your work or a collector looking to add to your collection, our platform is the perfect place to connect, bid, and own beautiful art.
          </p>
          <div className="space-x-4">
            <a href="/register" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Register
            </a>
            <a href="/login" className="inline-block px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors">
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
