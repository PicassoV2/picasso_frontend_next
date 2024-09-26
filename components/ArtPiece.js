import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { artPieces } from './data/artPieces';

const ArtPiece = () => {
  const { id } = useParams();
  const piece = artPieces.find((p) => p.id === parseInt(id));

  if (!piece) {
    return <div>Art piece not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <Link to="/gallery" className="text-blue-500 hover:underline mb-8 inline-block">&larr; Back to Gallery</Link>
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img src={piece.imageUrl} alt={piece.title} className="w-full h-96 object-cover" />
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{piece.title}</h1>
            <p className="text-lg mb-4">{piece.description}</p>
            <Link to={`/artist/${piece.artistId}`} className="text-blue-500 hover:underline">View Artist</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtPiece;