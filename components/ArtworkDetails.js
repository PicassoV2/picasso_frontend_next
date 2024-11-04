// ArtworkDetails.js
import React, { useState, useRef } from 'react';

const ArtworkDetails = ({ artwork }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const imageRef = useRef(null);

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel(zoomLevel - 0.1);
  };

  const handleMouseDown = (event) => {
    if (event.button === 0) { // Only respond to left mouse button
      setIsDragging(true);
      setOffsetX(event.clientX - imageRef.current.offsetLeft);
      setOffsetY(event.clientY - imageRef.current.offsetTop);
    }
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      setPanX(event.clientX - offsetX);
      setPanY(event.clientY - offsetY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      handleZoomOut();
    } else {
      handleZoomIn();
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {artwork && (
          <React.Fragment>
            <h1 className="text-4xl font-bold mb-8">{artwork.title}</h1>
            <div className="relative">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-1/2 h-1/2 object-contain"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`,
                }}
                ref={imageRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onWheel={handleWheel}
              />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 flex justify-center space-x-4">
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleZoomIn}
                >
                  <span className="text-sm text-white">&#x1F50D;+</span>
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleZoomOut}
                >
                  <span className="text-sm text-white">&#x1F50D;-</span>
                </button>
              </div>
            </div>
            <p className="text-lg mb-4">{artwork.description}</p>
            <p className="text-lg mb-4">Artist: {artwork.artistName}</p>
            <p className="text-lg mb-4">History: {artwork.history}</p>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default ArtworkDetails;