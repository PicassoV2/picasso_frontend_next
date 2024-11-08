import React, { useState } from 'react';
import Navbar from '../Navbar';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showVR, setShowVR] = useState(false);

  const handleExploreClick = () => {
    setShowModal(true);
  };

  const handleVRClick = () => {
    setShowVR(true);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: 'url(/artgalaryrefimg.jpeg)', // Local image from public folder
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Explore VR Art Gallery</h1>
          <p className="mt-4 text-lg md:text-2xl">Dive into a new world of artistic experience.</p>
          <button
            onClick={handleExploreClick}
            className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-400"
          >
            Register
          </button>

          <button
            onClick={handleVRClick}
            className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-400"
          >
            Enter Exhibition
          </button>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm mx-auto">
            <h2 className="text-xl font-bold mb-4">Register Now!</h2>
            <p className="mb-4">Register yourself and join our waitlist to experience the immersive VR Art Gallery.</p>
            <a
              href="/register" // Link to the registration page
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-400"
              onClick={() => setShowModal(false)} // Close modal on click
            >
              Register
            </a>
          </div>
        </div>
      )}

      {showVR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm mx-auto relative">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            onClick={() => setShowVR(false)}
          >
            ×
          </button>
          <h3 className="text-xl font-bold mb-4">Mobile Users Please Switch to Landscape View for best experience!</h3>
            <a
              href="/vrlandingpage" // Link to the registration page
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-400"
              onClick={() => setShowVR(false)} // Close modal on click
            >
              Enter
            </a>
          </div>
        </div>
      )}
    </div>   
  );
};

export default HomePage;
