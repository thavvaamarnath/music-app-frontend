import React from 'react';
import { Music } from 'lucide-react';

function Genres() {
  const genres = [
    { name: 'Pop', count: '2,845 songs', color: 'from-pink-500 to-rose-500', icon: '🎵' },
    { name: 'Rock', count: '1,923 songs', color: 'from-red-500 to-orange-500', icon: '🎸' },
    { name: 'Hip Hop', count: '3,112 songs', color: 'from-purple-500 to-pink-500', icon: '🎤' },
    { name: 'Electronic', count: '1,687 songs', color: 'from-cyan-500 to-blue-500', icon: '🎛️' },
    { name: 'Jazz', count: '892 songs', color: 'from-amber-500 to-yellow-500', icon: '🎺' },
    { name: 'Classical', count: '567 songs', color: 'from-indigo-500 to-purple-500', icon: '🎼' },
    { name: 'R&B', count: '1,234 songs', color: 'from-violet-500 to-purple-500', icon: '🎹' },
    { name: 'Country', count: '743 songs', color: 'from-green-500 to-teal-500', icon: '🤠' },
    { name: 'Reggae', count: '456 songs', color: 'from-yellow-500 to-green-500', icon: '🌴' },
    { name: 'Blues', count: '321 songs', color: 'from-blue-500 to-indigo-500', icon: '🎷' },
    { name: 'Folk', count: '234 songs', color: 'from-emerald-500 to-green-500', icon: '🪕' },
    { name: 'Funk', count: '678 songs', color: 'from-orange-500 to-red-500', icon: '🕺' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Genres</h1>
          <p className="text-gray-400">Discover music by genre</p>
        </div>
        <Music className="w-8 h-8 text-purple-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {genres.map((genre, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-br ${genre.color} rounded-xl p-6 cursor-pointer hover:scale-105 transition-all duration-300 group relative overflow-hidden`}
          >
            <div className="relative z-10">
              <div className="text-3xl mb-3">{genre.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{genre.name}</h3>
              <p className="text-white/80 text-sm">{genre.count}</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full group-hover:scale-110 transition-transform" />
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-white/10 rounded-full group-hover:scale-110 transition-transform" />
          </div>
        ))}
      </div>

      <div className="bg-gray-800 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Popular This Week</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-2xl">
              🎵
            </div>
            <div>
              <h3 className="font-semibold">Pop Hits 2024</h3>
              <p className="text-sm text-gray-400">Trending now</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-2xl">
              🎸
            </div>
            <div>
              <h3 className="font-semibold">Rock Legends</h3>
              <p className="text-sm text-gray-400">Classic hits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Genres;