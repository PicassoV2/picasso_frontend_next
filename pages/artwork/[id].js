import React from 'react';
import { useRouter } from 'next/router';
import ArtworkDetails from '@/components/ArtworkDetails';
import { artPieces } from '@/components/data/artPieces';

const ArtworkPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const artwork = artPieces.find((piece) => piece.id === parseInt(id));

  return <ArtworkDetails artwork={artwork} />;
};

export default ArtworkPage;