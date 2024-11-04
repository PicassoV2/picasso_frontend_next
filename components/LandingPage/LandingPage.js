import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import Herosection from './Herosection';
import Footer from './Footer';

const LandingPage = () => {
  // Placeholder for artPieces data
  // const artPieces = [
  //   { id: 1, title: 'Artwork 1', imageUrl: '/placeholder1.jpg' },
  //   { id: 2, title: 'Artwork 2', imageUrl: '/placeholder2.jpg' },
  //   { id: 3, title: 'Artwork 3', imageUrl: '/placeholder3.jpg' },
  // ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const artPieces = [
    { id: 1, title: 'Artwork 1', imageUrl: 'https://res.cloudinary.com/dehnjdei5/image/upload/v1730304297/Bondage-min_nljzl4.jpg', price: 10000 },
    { id: 2, title: 'Artwork 2', imageUrl: 'https://res.cloudinary.com/dehnjdei5/image/upload/v1730304297/Bondage-min_nljzl4.jpg', price: 2500 },
    { id: 3, title: 'Artwork 3', imageUrl: 'https://res.cloudinary.com/dehnjdei5/image/upload/v1730304297/Bondage-min_nljzl4.jpg', price: 20050 },
    { id: 4, title: 'Artwork 4', imageUrl: 'https://res.cloudinary.com/dehnjdei5/image/upload/v1730304297/Bondage-min_nljzl4.jpg', price: 10000 },
    { id: 5, title: 'Artwork 5', imageUrl: 'https://res.cloudinary.com/dehnjdei5/image/upload/v1730304297/Bondage-min_nljzl4.jpg', price: 2500 },
    { id: 6, title: 'Artwork 6', imageUrl: 'https://res.cloudinary.com/dehnjdei5/image/upload/v1730304297/Bondage-min_nljzl4.jpg', price: 20050 },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Herosection />

      {/* Carousel Section */}
      <section id="art-collection" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Explore Our Art Collection</h2>
          <Slider {...settings}>
            {artPieces.map((piece) => (
              <div key={piece.id} className="p-4 border border-gray-400 rounded-lg m-4">
                <Link href={`/artwork/${piece.id}`}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={piece.imageUrl}
                      alt={piece.title}
                      className="w-full h-80 object-cover" 
                    />
                    <div className="p-2 text-white bg-gray-900 text-center">
                      {piece.title}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {artPieces.map((piece) => (
              <div key={piece.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={piece.imageUrl}
                  alt={piece.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-2 text-white bg-gray-900 text-center">
                  {piece.title}
                  <div className="flex justify-center items-center mt-2">
                  <div className="bg-gray-700 p-2 rounded text-sm font-bold mr-2">
                      ${piece.price}
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 rounded">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>



  );
};



export default LandingPage;
