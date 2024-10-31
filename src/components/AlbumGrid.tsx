import React from 'react';
import AlbumCard from './AlbumCard';

const albums = [
  {
    id: 1,
    title: "Good Word",
    artist: "Mama le Succès",
    price: "2000 CFA",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80"
  },
  {
    id: 2,
    title: "Embryon",
    artist: "Saccharose Buccal Agréable",
    price: "2000 CFA",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80"
  },
  {
    id: 3,
    title: "Sira",
    artist: "Young BG",
    price: "2000 CFA",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80"
  },
  {
    id: 4,
    title: "Kom G Voeux",
    artist: "Mylmo",
    price: "2000 CFA",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80"
  }
];

const AlbumGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          title={album.title}
          artist={album.artist}
          price={album.price}
          cover={album.cover}
        />
      ))}
    </div>
  );
};

export default AlbumGrid;