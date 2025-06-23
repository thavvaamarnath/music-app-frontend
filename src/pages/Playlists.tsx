import React from 'react';
import { Plus, Play, Heart, MoreHorizontal, Music, Users, Lock } from 'lucide-react';

function Playlists() {
  const myPlaylists = [
    { 
      id: '1', 
      name: 'My Favorites', 
      description: 'All my favorite songs in one place',
      tracks: 47, 
      duration: '3h 12m',
      image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400',
      isPrivate: false
    },
    { 
      id: '2', 
      name: 'Workout Mix', 
      description: 'High energy songs for gym sessions',
      tracks: 23, 
      duration: '1h 45m',
      image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400',
      isPrivate: false
    },
    { 
      id: '3', 
      name: 'Chill Vibes', 
      description: 'Relaxing music for peaceful moments',
      tracks: 35, 
      duration: '2h 28m',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400',
      isPrivate: true
    },
    { 
      id: '4', 
      name: 'Road Trip', 
      description: 'Perfect songs for long drives',
      tracks: 52, 
      duration: '3h 56m',
      image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400',
      isPrivate: false
    }
  ];

  const featuredPlaylists = [
    { name: 'Today\'s Top Hits', curator: 'Groovy', followers: '2.1M', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Indie Rock Classics', curator: 'Music Experts', followers: '847K', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'R&B Soul', curator: 'Groove Station', followers: '1.3M', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Your Playlists</h1>
          <p className="text-gray-400">Create and manage your music collections</p>
        </div>
        <Music className="w-8 h-8 text-purple-500" />
      </div>

      {/* Create New Playlist */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-800 rounded-xl p-8">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center">
            <Plus className="w-12 h-12" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Create Your First Playlist</h2>
            <p className="text-purple-200 mb-4">Start building your perfect music collection</p>
            <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Create Playlist
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
          <Heart className="w-6 h-6 text-red-500" />
          <div className="text-left">
            <h3 className="font-medium">Liked Songs</h3>
            <p className="text-sm text-gray-400">47 songs</p>
          </div>
        </button>
        <button className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
          <Music className="w-6 h-6 text-green-500" />
          <div className="text-left">
            <h3 className="font-medium">Recently Played</h3>
            <p className="text-sm text-gray-400">Auto playlist</p>
          </div>
        </button>
        <button className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
          <Plus className="w-6 h-6 text-purple-500" />
          <div className="text-left">
            <h3 className="font-medium">New Playlist</h3>
            <p className="text-sm text-gray-400">Create new</p>
          </div>
        </button>
      </div>

      {/* My Playlists */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">My Playlists</h2>
          <div className="flex gap-2">
            <button className="text-gray-400 hover:text-white text-sm">Sort by: Recently created</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {myPlaylists.map((playlist) => (
            <div key={playlist.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300 group cursor-pointer">
              <div className="relative mb-4">
                <img 
                  src={playlist.image} 
                  alt={playlist.name}
                  className="w-full aspect-square object-cover rounded-lg"
                />
                {playlist.isPrivate && (
                  <div className="absolute top-2 left-2 p-1 bg-black/60 rounded">
                    <Lock className="w-3 h-3" />
                  </div>
                )}
                <button className="absolute bottom-2 right-2 p-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110">
                  <Play className="w-5 h-5 text-white" />
                </button>
              </div>
              <h3 className="font-bold text-lg mb-1 truncate">{playlist.name}</h3>
              <p className="text-gray-400 text-sm mb-2 line-clamp-2">{playlist.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{playlist.tracks} songs</span>
                <span>{playlist.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Playlists */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Playlists</h2>
          <button className="text-gray-400 hover:text-white">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPlaylists.map((playlist, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors group cursor-pointer">
              <div className="flex items-center gap-4">
                <img 
                  src={playlist.image} 
                  alt={playlist.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{playlist.name}</h3>
                  <p className="text-sm text-gray-400 truncate">by {playlist.curator}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                    <Users className="w-3 h-3" />
                    <span>{playlist.followers} followers</span>
                  </div>
                </div>
                <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-5 h-5 text-green-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Playlist Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Total Playlists</h3>
          <p className="text-3xl font-bold">{myPlaylists.length}</p>
          <p className="text-green-200 text-sm mt-2">Your collections</p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Total Songs</h3>
          <p className="text-3xl font-bold">{myPlaylists.reduce((acc, playlist) => acc + playlist.tracks, 0)}</p>
          <p className="text-blue-200 text-sm mt-2">In all playlists</p>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Listening Time</h3>
          <p className="text-3xl font-bold">11h 21m</p>
          <p className="text-purple-200 text-sm mt-2">Total duration</p>
        </div>
      </div>

      {/* Recently Created */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Recently Created</h2>
        <div className="space-y-2">
          {myPlaylists.slice(0, 3).map((playlist) => (
            <div key={playlist.id} className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group">
              <img 
                src={playlist.image} 
                alt={playlist.name}
                className="w-12 h-12 rounded object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{playlist.name}</h4>
                <p className="text-sm text-gray-400 truncate">{playlist.tracks} songs • {playlist.duration}</p>
              </div>
              <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-4 h-4" />
              </button>
              <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Playlists;