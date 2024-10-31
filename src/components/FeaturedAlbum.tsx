import React from 'react';
import { Play, Download } from 'lucide-react';

const FeaturedAlbum = () => {
  return (
    <div className="relative h-[500px] rounded-2xl overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80" 
        alt="Featured Album" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent">
        <div className="h-full flex flex-col justify-center px-12">
          <h1 className="text-6xl font-bold mb-4">Album de la Semaine</h1>
          <p className="text-2xl text-gray-300 mb-8">Découvrez notre sélection spéciale</p>
          <div className="flex space-x-4">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-yellow-300 transition">
              <Play className="w-5 h-5" />
              <span>Écouter</span>
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-white/20 transition">
              <Download className="w-5 h-5" />
              <span>Télécharger</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAlbum;