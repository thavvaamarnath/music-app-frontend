import React from 'react';
import { Heart, Play, MoreHorizontal, Download } from 'lucide-react';

function Favourites() {
  const favouriteTracks = [
    { id: '1', title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20', addedAt: '3 days ago', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', duration: '3:23', addedAt: '1 week ago', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '3', title: 'Good 4 U', artist: 'Olivia Rodrigo', album: 'SOUR', duration: '2:58', addedAt: '2 weeks ago', image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '4', title: 'Watermelon Sugar', artist: 'Harry Styles', album: 'Fine Line', duration: '2:54', addedAt: '3 weeks ago', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '5', title: 'Bad Guy', artist: 'Billie Eilish', album: 'When We All Fall Asleep', duration: '3:14', addedAt: '1 month ago', image: 'https://images.pexels.com/photos/1819653/pexels-photo-1819653.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const favouriteArtists = [
    { id: '1', name: 'The Weeknd', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', name: 'Dua Lipa', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '3', name: 'Olivia Rodrigo', image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '4', name: 'Harry Styles', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const favouriteAlbums = [
    { id: '1', title: 'After Hours', artist: 'The Weeknd', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', title: 'Future Nostalgia', artist: 'Dua Lipa', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '3', title: 'SOUR', artist: 'Olivia Rodrigo', image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '4', title: 'Fine Line', artist: 'Harry Styles', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Your Favourites</h1>
          <p className="text-gray-400">Music you love the most</p>
        </div>
        <Heart className="w-8 h-8 text-red-500" />
      </div>

      {/* Header Stats */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">❤️ Liked Songs</h2>
            <p className="text-red-100">{favouriteTracks.length} songs • Made for you</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2">
              <Play className="w-5 h-5" />
              Play All
            </button>
            <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Favourite Tracks */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Favourite Songs</h2>
          <button className="text-gray-400 hover:text-white text-sm">Sort by: Recently Added</button>
        </div>
        
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-4 py-2 text-sm text-gray-400 border-b border-gray-700">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Title</div>
          <div className="col-span-2">Album</div>
          <div className="col-span-2">Date Added</div>
          <div className="col-span-1">Duration</div>
          <div className="col-span-1"></div>
        </div>

        {/* Track List */}
        <div className="space-y-1">
          {favouriteTracks.map((track, index) => (
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
              <div className="col-span-2 text-gray-400 text-sm">{track.addedAt}</div>
              <div className="col-span-1 text-gray-400 text-sm">{track.duration}</div>
              <div className="col-span-1 flex items-center gap-2">
                <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </button>
                <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="w-4 h-4 text-gray-400 hover:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Favourite Artists */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Favourite Artists</h2>
          <div className="space-y-3">
            {favouriteArtists.map((artist) => (
              <div key={artist.id} className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{artist.name}</h3>
                  <p className="text-sm text-gray-400">Artist</p>
                </div>
                <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-4 h-4 text-green-500" />
                </button>
                <button className="p-2">
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Favourite Albums */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Favourite Albums</h2>
          <div className="space-y-3">
            {favouriteAlbums.map((album) => (
              <div key={album.id} className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group">
                <img 
                  src={album.image} 
                  alt={album.title}
                  className="w-12 h-12 rounded object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{album.title}</h3>
                  <p className="text-sm text-gray-400">{album.artist}</p>
                </div>
                <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-4 h-4 text-green-500" />
                </button>
                <button className="p-2">
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recently Liked */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Recently Liked</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {favouriteTracks.slice(0, 6).map((track) => (
            <div key={track.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors group cursor-pointer">
              <div className="relative mb-3">
                <img 
                  src={track.image} 
                  alt={track.title}
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <button className="absolute bottom-2 right-2 p-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-4 h-4" />
                </button>
              </div>
              <h3 className="font-medium text-sm truncate">{track.title}</h3>
              <p className="text-xs text-gray-400 truncate">{track.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favourites;