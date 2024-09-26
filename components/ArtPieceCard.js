import React from 'react';
import Link from 'next/link';

const ArtPieceCard = ({ piece }) => {
  return (
    <Link href={`/art/${piece.id}`} passHref>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer">
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
  );
};

export default ArtPieceCard;