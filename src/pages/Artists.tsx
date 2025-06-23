import React from 'react';
import { Play, Heart, Users, Music } from 'lucide-react';

function Artists() {
  const featuredArtist = {
    name: 'Taylor Swift',
    followers: '89.2M followers',
    monthlyListeners: '72.1M monthly listeners',
    image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=500',
    topSongs: ['Anti-Hero', 'Lavender Haze', 'Karma', 'Midnight Rain']
  };

  const artists = [
    { id: '1', name: 'The Weeknd', followers: '45.2M', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', name: 'Dua Lipa', followers: '32.1M', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '3', name: 'Ariana Grande', followers: '41.7M', image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '4', name: 'Harry Styles', followers: '28.9M', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '5', name: 'Billie Eilish', followers: '35.4M', image: 'https://images.pexels.com/photos/1819653/pexels-photo-1819653.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '6', name: 'Ed Sheeran', followers: '39.8M', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const topCharts = [
    { rank: 1, name: 'Taylor Swift', change: '+2', image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { rank: 2, name: 'Bad Bunny', change: '—', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { rank: 3, name: 'The Weeknd', change: '-1', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { rank: 4, name: 'Drake', change: '+1', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { rank: 5, name: 'Ariana Grande', change: '+3', image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Artists</h1>
          <p className="text-gray-400">Discover amazing artists and their music</p>
        </div>
        <Users className="w-8 h-8 text-purple-500" />
      </div>

      {/* Featured Artist */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-800 rounded-xl p-8 relative overflow-hidden">
        <div className="flex items-center gap-8 relative z-10">
          <img 
            src={featuredArtist.image} 
            alt={featuredArtist.name}
            className="w-40 h-40 rounded-full object-cover shadow-2xl border-4 border-white/20"
          />
          <div className="flex-1">
            <p className="text-purple-200 text-sm uppercase tracking-wider mb-2">Featured Artist</p>
            <h2 className="text-4xl font-bold mb-3">{featuredArtist.name}</h2>
            <div className="flex items-center gap-6 mb-4 text-purple-200">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {featuredArtist.followers}
              </span>
              <span className="flex items-center gap-2">
                <Music className="w-4 h-4" />
                {featuredArtist.monthlyListeners}
              </span>
            </div>
            <div className="flex gap-4 mb-4">
              <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Play className="w-5 h-5" />
                Play
              </button>
              <button className="px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition-colors">
                Follow
              </button>
              <button className="p-3 border border-white/30 rounded-full hover:bg-white/10 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>
            <div>
              <p className="text-sm text-purple-200 mb-2">Popular songs:</p>
              <p className="text-purple-100">{featuredArtist.topSongs.join(', ')}</p>
            </div>
          </div>
        </div>
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full" />
        <div className="absolute -left-4 -top-4 w-16 h-16 bg-white/5 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Popular Artists */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular Artists</h2>
            <button className="text-gray-400 hover:text-white">See all</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {artists.map((artist) => (
              <div key={artist.id} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group cursor-pointer">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{artist.name}</h3>
                  <p className="text-gray-400 text-sm">{artist.followers} followers</p>
                </div>
                <button className="p-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110">
                  <Play className="w-4 h-4 text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Top Charts */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Artist Charts</h2>
          <div className="space-y-3">
            {topCharts.map((artist) => (
              <div key={artist.rank} className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group">
                <span className="text-xl font-bold text-gray-400 w-8">{artist.rank}</span>
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{artist.name}</h4>
                  <span className={`text-xs ${
                    artist.change.includes('+') ? 'text-green-400' : 
                    artist.change.includes('-') ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {artist.change}
                  </span>
                </div>
                <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Artists */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Rising Artists</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {artists.slice(0, 6).map((artist) => (
            <div key={artist.id} className="text-center group cursor-pointer">
              <div className="relative mb-3">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full aspect-square object-cover rounded-full group-hover:scale-105 transition-transform"
                />
                <button className="absolute bottom-2 right-2 p-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-3 h-3 text-white" />
                </button>
              </div>
              <h3 className="font-medium text-sm truncate">{artist.name}</h3>
              <p className="text-xs text-gray-400 mt-1">Artist</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Artists;