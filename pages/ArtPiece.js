import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ArtPiece = () => {
  const router = useRouter();
  const { id } = router.query;

  // This is a placeholder. You should fetch the actual art piece data here.
  // For example, you might use an API call or import from a data file.
  const piece = { id: id, title: 'Sample Art', imageUrl: '/placeholder.jpg', description: 'This is a sample description.' };

  if (!piece) {
    return <div>Art piece not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="text-blue-500 hover:underline mb-8 inline-block">&larr; Back to Gallery</Link>
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img src={piece.imageUrl} alt={piece.title} className="w-full h-96 object-cover" />
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{piece.title}</h1>
            <p className="text-lg">{piece.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtPiece;