import React from 'react';
import Link from 'next/link';
import Herosection from './Herosection';
import Footer from './Footer';

const LandingPage = () => {
  // Placeholder for artPieces data
  const artPieces = [
    { id: 1, title: 'Artwork 1', imageUrl: '/placeholder1.jpg' },
    { id: 2, title: 'Artwork 2', imageUrl: '/placeholder2.jpg' },
    { id: 3, title: 'Artwork 3', imageUrl: '/placeholder3.jpg' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Herosection />

      {/* Art Collection Section */}
      <section id="art-collection" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Explore Our Art Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artPieces.map((piece) => (
              <Link href={`/artwork/${piece.id}`} key={piece.id}>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={piece.imageUrl}
                    alt={piece.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold">{piece.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;