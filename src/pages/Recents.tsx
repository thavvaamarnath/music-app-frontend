import React from 'react';
import { Clock, Play, MoreHorizontal } from 'lucide-react';

function Recents() {
  const recentTracks = [
    { id: '1', title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20', playedAt: '2 hours ago', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', duration: '3:23', playedAt: '3 hours ago', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '3', title: 'Good 4 U', artist: 'Olivia Rodrigo', album: 'SOUR', duration: '2:58', playedAt: '5 hours ago', image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '4', title: 'Stay', artist: 'The Kid LAROI', album: 'F*CK LOVE 3', duration: '2:21', playedAt: '1 day ago', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '5', title: 'Bad Habits', artist: 'Ed Sheeran', album: '=', duration: '3:51', playedAt: '1 day ago', image: 'https://images.pexels.com/photos/1819653/pexels-photo-1819653.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const recentAlbums = [
    { id: '1', title: 'After Hours', artist: 'The Weeknd', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', title: 'Future Nostalgia', artist: 'Dua Lipa', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '3', title: 'SOUR', artist: 'Olivia Rodrigo', image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '4', title: '=', artist: 'Ed Sheeran', image: 'https://images.pexels.com/photos/1819653/pexels-photo-1819653.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Recently Played</h1>
          <p className="text-gray-400">Your listening history</p>
        </div>
        <Clock className="w-8 h-8 text-purple-500" />
      </div>

      {/* Quick Access */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recentAlbums.map((album) => (
            <div key={album.id} className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-all duration-300 cursor-pointer group flex items-center gap-3">
              <img 
                src={album.image} 
                alt={album.title}
                className="w-12 h-12 rounded object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm truncate">{album.title}</h3>
                <p className="text-xs text-gray-400 truncate">{album.artist}</p>
              </div>
              <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-4 h-4 text-green-500" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Tracks */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Recent Tracks</h2>
          <button className="text-gray-400 hover:text-white text-sm">Clear History</button>
        </div>
        
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-4 py-2 text-sm text-gray-400 border-b border-gray-700">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Title</div>
          <div className="col-span-2">Album</div>
          <div className="col-span-2">Played At</div>
          <div className="col-span-1">Duration</div>
          <div className="col-span-1"></div>
        </div>

        {/* Track List */}
        <div className="space-y-1">
          {recentTracks.map((track, index) => (
            <div key={track.id} className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors group items-center">
              <div className="col-span-1 text-gray-400">
                <span className="group-hover:hidden">{index + 1}</span>
                <Play className="w-4 h-4 text-white hidden group-hover:block cursor-pointer" />
              </div>
              <div className="col-span-5 flex items-center gap-3">
                <img 
                  src={track.image} 
                  alt={track.title}
                  className="w-10 h-10 rounded object-cover"
                />
                <div>
                  <h3 className="font-medium text-white">{track.title}</h3>
                  <p className="text-sm text-gray-400">{track.artist}</p>
                </div>
              </div>
              <div className="col-span-2 text-gray-400 text-sm">{track.album}</div>
              <div className="col-span-2 text-gray-400 text-sm">{track.playedAt}</div>
              <div className="col-span-1 text-gray-400 text-sm">{track.duration}</div>
              <div className="col-span-1">
                <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="w-4 h-4 text-gray-400 hover:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Listening Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Total Play Time</h3>
          <p className="text-3xl font-bold">47h 23m</p>
          <p className="text-purple-200 text-sm mt-2">This week</p>
        </div>
        <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Songs Played</h3>
          <p className="text-3xl font-bold">342</p>
          <p className="text-green-200 text-sm mt-2">This week</p>
        </div>
        <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Artists Discovered</h3>
          <p className="text-3xl font-bold">12</p>
          <p className="text-orange-200 text-sm mt-2">This week</p>
        </div>
      </div>

      {/* Most Played This Week */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Most Played This Week</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentTracks.slice(0, 3).map((track, index) => (
            <div key={track.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-purple-500">#{index + 1}</span>
                <img 
                  src={track.image} 
                  alt={track.title}
                  className="w-12 h-12 rounded object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium truncate">{track.title}</h3>
                  <p className="text-sm text-gray-400 truncate">{track.artist}</p>
                </div>
                <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-4 h-4 text-green-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recents;