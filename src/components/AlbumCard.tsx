import React from 'react';
import { Download } from 'lucide-react';

interface AlbumCardProps {
  title: string;
  artist: string;
  price: string;
  cover: string;
}

const AlbumCard = ({ title, artist, price, cover }: AlbumCardProps) => {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden group hover:bg-zinc-800 transition duration-300">
      <div className="relative aspect-square">
        <img 
          src={cover} 
          alt={`${title} by ${artist}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-medium flex items-center space-x-2 hover:bg-yellow-400 transition">
            <Download className="w-4 h-4" />
            <span>Télécharger</span>
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-400 mb-3">{artist}</p>
        <p className="text-yellow-500 font-bold">{price}</p>
      </div>
    </div>
  );
};

export default AlbumCard;