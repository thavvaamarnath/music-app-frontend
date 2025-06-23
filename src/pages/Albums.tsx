import React from 'react';
import { Play, Heart, MoreHorizontal } from 'lucide-react';

function Albums() {
  const albums = [
    { 
      id: '1', 
      title: 'After Hours', 
      artist: 'The Weeknd', 
      year: '2020', 
      tracks: 14,
      image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    { 
      id: '2', 
      title: 'Future Nostalgia', 
      artist: 'Dua Lipa', 
      year: '2020', 
      tracks: 11,
      image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    { 
      id: '3', 
      title: 'Positions', 
      artist: 'Ariana Grande', 
      year: '2020', 
      tracks: 14,
      image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    { 
      id: '4', 
      title: 'folklore', 
      artist: 'Taylor Swift', 
      year: '2020', 
      tracks: 16,
      image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    { 
      id: '5', 
      title: 'Fine Line', 
      artist: 'Harry Styles', 
      year: '2019', 
      tracks: 12,
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    { 
      id: '6', 
      title: 'When We All Fall Asleep', 
      artist: 'Billie Eilish', 
      year: '2019', 
      tracks: 14,
      image: 'https://images.pexels.com/photos/1819653/pexels-photo-1819653.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Albums</h1>
          <p className="text-gray-400">Discover your favorite albums</p>
        </div>
      </div>

      {/* Featured Album */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-pink-800 rounded-xl p-8">
        <div className="flex items-center gap-8">
          <img 
            src="https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Featured Album"
            className="w-32 h-32 rounded-lg shadow-2xl"
          />
          <div>
            <p className="text-purple-200 text-sm uppercase tracking-wider mb-2">Album of the Week</p>
            <h2 className="text-3xl font-bold mb-2">Future Nostalgia</h2>
            <p className="text-xl text-purple-200 mb-4">Dua Lipa • 2020 • 11 tracks</p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Play className="w-5 h-5" />
                Play Album
              </button>
              <button className="p-3 border border-white/30 rounded-lg hover:bg-white/10 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Albums Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular Albums</h2>
          <button className="text-gray-400 hover:text-white">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {albums.map((album) => (
            <div key={album.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300 group cursor-pointer">
              <div className="relative mb-4">
                <img 
                  src={album.image} 
                  alt={album.title}
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <button className="absolute bottom-2 right-2 p-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110">
                  <Play className="w-5 h-5 text-white" />
                </button>
              </div>
              <h3 className="font-bold text-lg mb-1 truncate">{album.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{album.artist}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{album.year}</span>
                <span>{album.tracks} tracks</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Played Albums */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
        <div className="space-y-2">
          {albums.slice(0, 4).map((album) => (
            <div key={album.id} className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group">
              <img 
                src={album.image} 
                alt={album.title}
                className="w-12 h-12 rounded object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{album.title}</h4>
                <p className="text-sm text-gray-400 truncate">{album.artist} • {album.year}</p>
              </div>
              <span className="text-sm text-gray-400">{album.tracks} tracks</span>
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

export default Albums;