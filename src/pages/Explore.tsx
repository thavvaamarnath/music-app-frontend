import React from 'react';
import { Play, MoreHorizontal } from 'lucide-react';
import { useMusicPlayer } from '../context/MusicPlayerContext';

function Explore() {
  const { playTrack } = useMusicPlayer();

  const topArtists = [
    { id: '1', name: 'Joji', plays: '42M Plays', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', name: 'Honne', plays: '14M Plays', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '3', name: 'Tessa Violet', plays: '32M Plays', image: 'https://images.pexels.com/photos/1819653/pexels-photo-1819653.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '4', name: 'Lana Del Rey', plays: '64M Plays', image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '5', name: 'Dua Lipa', plays: '84M Plays', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '6', name: 'Olivia Rodrigo', plays: '52M Plays', image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const genres = [
    { name: 'Dance Beat', color: 'from-blue-500 to-purple-600' },
    { name: 'Electro Pop', color: 'from-orange-500 to-red-500' },
    { name: 'Alternative Indie', color: 'from-orange-600 to-yellow-500' },
    { name: 'Hip Hop', color: 'from-teal-500 to-cyan-600' },
    { name: 'Classical Period', color: 'from-purple-500 to-pink-500' },
    { name: 'Hiphop Rap', color: 'from-indigo-500 to-purple-600' }
  ];

  const topChart = [
    { id: '1', rank: '01', title: 'Happier', artist: 'Olivia Rodrigo', duration: '2:45', image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', rank: '02', title: 'New Rules', artist: 'Dua Lipa', duration: '3:45', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '3', rank: '03', title: 'Summertime Sadness', artist: 'Lana Del Rey', duration: '4:02', image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '4', rank: '04', title: 'Location', artist: 'Honne', duration: '5:25', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '5', rank: '05', title: 'Glimpse of us', artist: 'Joji', duration: '2:35', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const handlePlayTrack = (track: any) => {
    playTrack({
      id: track.id,
      title: track.title,
      artist: track.artist,
      album: 'Best Album 2020',
      duration: track.duration,
      image: track.image
    });
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-blue-800 rounded-xl p-8 overflow-hidden">
        <div className="relative z-10 flex items-center justify-between">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-4">In My Feelings</h1>
            <p className="text-xl mb-2">Camila Cabelo</p>
            <p className="text-gray-300 mb-6">64Millions plays</p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Listen Now
              </button>
              <button className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                <Play className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=500" 
              alt="Featured Artist"
              className="w-64 h-64 rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Artist */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Top Artist</h2>
            <button className="text-gray-400 hover:text-white">See all</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {topArtists.map((artist) => (
              <div key={artist.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer group">
                <div className="relative mb-3">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <button className="absolute bottom-2 right-2 p-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="font-semibold mb-1">{artist.name}</h3>
                <p className="text-sm text-gray-400">{artist.plays}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Chart */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Top Chart</h2>
            <button className="text-gray-400 hover:text-white">See all</button>
          </div>
          <div className="space-y-3">
            {topChart.map((track) => (
              <div key={track.id} className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group">
                <span className="text-lg font-bold text-gray-400 w-6">{track.rank}</span>
                <img 
                  src={track.image} 
                  alt={track.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium truncate">{track.title}</h4>
                  <p className="text-sm text-gray-400 truncate">{track.artist}</p>
                </div>
                <span className="text-sm text-gray-400">{track.duration}</span>
                <button 
                  onClick={() => handlePlayTrack(track)}
                  className="p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
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

      {/* Genres */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Genres</h2>
          <button className="text-gray-400 hover:text-white">See all</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {genres.map((genre, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${genre.color} rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform`}
            >
              <h3 className="text-xl font-bold text-white">{genre.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;