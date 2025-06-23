import React from 'react';
import { Radio as RadioIcon, Play, Heart, Clock } from 'lucide-react';

function Radio() {
  const liveStations = [
    { id: '1', name: 'Groovy FM', genre: 'Pop Hits', listeners: '12.5K', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', name: 'Rock Central', genre: 'Classic Rock', listeners: '8.2K', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '3', name: 'Jazz Lounge', genre: 'Smooth Jazz', listeners: '5.7K', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '4', name: 'Hip Hop Nation', genre: 'Hip Hop', listeners: '15.3K', image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const featuredShow = {
    title: 'Midnight Vibes',
    host: 'DJ Luna',
    time: '12:00 AM - 6:00 AM',
    description: 'Chill out with the best late-night music selection',
    image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=500'
  };

  const scheduleToday = [
    { time: '06:00', show: 'Morning Boost', host: 'DJ Mike' },
    { time: '10:00', show: 'Workday Playlist', host: 'Sarah Chen' },
    { time: '14:00', show: 'Afternoon Mix', host: 'DJ Alex' },
    { time: '18:00', show: 'Drive Time', host: 'Emma Stone' },
    { time: '22:00', show: 'Night Owls', host: 'DJ Nova' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Radio</h1>
          <p className="text-gray-400">Live radio stations and shows</p>
        </div>
        <RadioIcon className="w-8 h-8 text-purple-500" />
      </div>

      {/* Featured Show */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 rounded-xl p-8 relative overflow-hidden">
        <div className="flex items-center gap-8 relative z-10">
          <img 
            src={featuredShow.image} 
            alt={featuredShow.title}
            className="w-32 h-32 rounded-lg shadow-2xl"
          />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-400 text-sm font-medium">LIVE NOW</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">{featuredShow.title}</h2>
            <p className="text-xl text-purple-200 mb-1">with {featuredShow.host}</p>
            <p className="text-purple-300 text-sm mb-4">{featuredShow.time}</p>
            <p className="text-purple-200 mb-6 max-w-md">{featuredShow.description}</p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Play className="w-5 h-5" />
                Listen Live
              </button>
              <button className="p-3 border border-white/30 rounded-lg hover:bg-white/10 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Live Stations */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Live Stations</h2>
          <div className="space-y-4">
            {liveStations.map((station) => (
              <div key={station.id} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={station.image} 
                    alt={station.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{station.name}</h3>
                  <p className="text-gray-400 text-sm">{station.genre}</p>
                  <p className="text-green-400 text-xs">{station.listeners} listeners</p>
                </div>
                <button className="p-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm font-medium">LIVE</span>
                </button>
                <button className="p-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110">
                  <Play className="w-4 h-4 text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Schedule */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Today's Schedule</h2>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="space-y-4">
              {scheduleToday.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded transition-colors">
                  <div className="flex items-center gap-2 text-purple-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.time}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.show}</h4>
                    <p className="text-xs text-gray-400">{item.host}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Genres */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Popular Genres</h3>
            <div className="space-y-2">
              {['Pop', 'Rock', 'Jazz', 'Hip Hop', 'Electronic', 'Country'].map((genre) => (
                <button 
                  key={genre}
                  className="w-full text-left p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Podcast Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Featured Podcasts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Music Talks', host: 'Interview Series', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { title: 'Beat Stories', host: 'Behind the Music', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { title: 'Sound Waves', host: 'Industry News', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400' }
          ].map((podcast, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer group">
              <img 
                src={podcast.image} 
                alt={podcast.title}
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold mb-1">{podcast.title}</h3>
              <p className="text-gray-400 text-sm">{podcast.host}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Radio;