import React from 'react';
import { Music as MusicIcon, Play, Heart, TrendingUp } from 'lucide-react';

function Music() {
  const featuredSong = {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    plays: '2.8B',
    image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=500'
  };

  const topHits = [
    { id: '1', title: 'As It Was', artist: 'Harry Styles', plays: '1.2B', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', title: 'Heat Waves', artist: 'Glass Animals', plays: '980M', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '3', title: 'Stay', artist: 'The Kid LAROI & Justin Bieber', plays: '850M', image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '4', title: 'Good 4 U', artist: 'Olivia Rodrigo', plays: '720M', image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const newReleases = [
    { id: '1', title: 'Flowers', artist: 'Miley Cyrus', type: 'Single', image: 'https://images.pexels.com/photos/1819653/pexels-photo-1819653.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', title: 'Unholy', artist: 'Sam Smith ft. Kim Petras', type: 'Single', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '3', title: 'Anti-Hero', artist: 'Taylor Swift', type: 'Album Track', image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '4', title: 'Calm Down', artist: 'Rema & Selena Gomez', type: 'Remix', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Music</h1>
          <p className="text-gray-400">Discover the latest hits and timeless classics</p>
        </div>
        <MusicIcon className="w-8 h-8 text-purple-500" />
      </div>

      {/* Featured Song */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-800 to-indigo-800 rounded-xl p-8 relative overflow-hidden">
        <div className="flex items-center gap-8 relative z-10">
          <img 
            src={featuredSong.image} 
            alt={featuredSong.title}
            className="w-40 h-40 rounded-lg shadow-2xl"
          />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">TRENDING NOW</span>
            </div>
            <h2 className="text-4xl font-bold mb-2">{featuredSong.title}</h2>
            <p className="text-xl text-purple-200 mb-1">{featuredSong.artist}</p>
            <p className="text-purple-300 text-sm mb-4">{featuredSong.album} • {featuredSong.plays} plays</p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Play className="w-5 h-5" />
                Play Now
              </button>
              <button className="p-3 border border-white/30 rounded-full hover:bg-white/10 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full" />
        <div className="absolute -left-4 -top-4 w-16 h-16 bg-white/5 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Hits */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Global Top Hits</h2>
          <div className="space-y-4">
            {topHits.map((song, index) => (
              <div key={song.id} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group">
                <span className="text-2xl font-bold text-purple-500 w-8">#{index + 1}</span>
                <img 
                  src={song.image} 
                  alt={song.title}
                  className="w-12 h-12 rounded object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{song.title}</h3>
                  <p className="text-gray-400 text-sm">{song.artist}</p>
                </div>
                <span className="text-sm text-gray-400">{song.plays}</span>
                <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-4 h-4 text-green-500" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* New Releases */}
        <div>
          <h2 className="text-2xl font-bold mb-6">New Releases</h2>
          <div className="space-y-4">
            {newReleases.map((release) => (
              <div key={release.id} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group">
                <img 
                  src={release.image} 
                  alt={release.title}
                  className="w-12 h-12 rounded object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{release.title}</h3>
                  <p className="text-gray-400 text-sm">{release.artist}</p>
                </div>
                <span className="text-xs bg-green-600 px-2 py-1 rounded-full">{release.type}</span>
                <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-4 h-4 text-green-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Music Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Browse by Mood</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Happy Hits', color: 'from-yellow-500 to-orange-500', emoji: '😊' },
            { name: 'Chill Vibes', color: 'from-blue-500 to-cyan-500', emoji: '😌' },
            { name: 'Workout', color: 'from-red-500 to-pink-500', emoji: '💪' },
            { name: 'Focus', color: 'from-green-500 to-teal-500', emoji: '🎯' },
            { name: 'Party Mix', color: 'from-purple-500 to-pink-500', emoji: '🎉' },
            { name: 'Sleep', color: 'from-indigo-500 to-purple-500', emoji: '😴' },
            { name: 'Romance', color: 'from-pink-500 to-rose-500', emoji: '💕' },
            { name: 'Throwback', color: 'from-amber-500 to-yellow-500', emoji: '📻' }
          ].map((mood, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${mood.color} rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform`}
            >
              <div className="text-3xl mb-2">{mood.emoji}</div>
              <h3 className="text-white font-semibold">{mood.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Music Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Total Songs</h3>
          <p className="text-3xl font-bold">50M+</p>
          <p className="text-purple-200 text-sm mt-2">Available to stream</p>
        </div>
        <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">New This Week</h3>
          <p className="text-3xl font-bold">2,847</p>
          <p className="text-green-200 text-sm mt-2">Fresh releases</p>
        </div>
        <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Top Genre</h3>
          <p className="text-3xl font-bold">Pop</p>
          <p className="text-orange-200 text-sm mt-2">Most popular</p>
        </div>
      </div>
    </div>
  );
}

export default Music;