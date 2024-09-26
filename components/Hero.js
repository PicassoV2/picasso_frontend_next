import React from 'react';

const Hero = ({ onExploreClick }) => {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: 'url(/artgalaryrefimg.jpeg)',
      }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Explore VR Art Gallery</h1>
        <p className="mt-4 text-lg md:text-2xl">Dive into a new world of artistic experience.</p>
        <button
          onClick={onExploreClick}
          className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-400"
        >
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;