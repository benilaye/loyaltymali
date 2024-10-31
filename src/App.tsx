import React from 'react';
import Navbar from './components/Navbar';
import FeaturedAlbum from './components/FeaturedAlbum';
import AlbumGrid from './components/AlbumGrid';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="container mx-auto px-6 py-12 space-y-12">
        <FeaturedAlbum />
        <AlbumGrid />
      </main>
    </div>
  );
}

export default App;