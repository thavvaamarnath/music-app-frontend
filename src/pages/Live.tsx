import React from 'react';
import { Radio, Play, Users, Clock, Zap } from 'lucide-react';

function Live() {
  const liveNow = {
    title: 'Summer Music Festival 2024',
    artist: 'Various Artists',
    location: 'Central Park, NYC',
    viewers: '45.2K',
    startTime: '8:00 PM EST',
    image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=500'
  };

  const liveStreams = [
    { id: '1', title: 'Acoustic Sessions', artist: 'Indie Collective', viewers: '12.5K', status: 'live', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', title: 'DJ Mix Night', artist: 'DJ Luna', viewers: '8.2K', status: 'live', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '3', title: 'Jazz Lounge', artist: 'The Jazz Quartet', viewers: '5.7K', status: 'live', image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '4', title: 'Rock Concert', artist: 'Thunder Band', viewers: '15.3K', status: 'live', image: 'https://images.pexels.com/photos/1819653/pexels-photo-1819653.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const upcomingEvents = [
    { id: '1', title: 'Pop Stars Live', artist: 'Ariana Grande', time: 'Tomorrow 9:00 PM', image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', title: 'Country Night', artist: 'Taylor Swift', time: 'Friday 8:30 PM', image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '3', title: 'Hip Hop Cypher', artist: 'Various Artists', time: 'Saturday 10:00 PM', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '4', title: 'Electronic Festival', artist: 'Calvin Harris', time: 'Sunday 7:00 PM', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const liveCategories = [
    { name: 'Concerts', count: '23 live', color: 'from-purple-600 to-pink-600', icon: '🎤' },
    { name: 'DJ Sets', count: '15 live', color: 'from-blue-600 to-cyan-600', icon: '🎧' },
    { name: 'Acoustic', count: '8 live', color: 'from-green-600 to-teal-600', icon: '🎸' },
    { name: 'Festivals', count: '5 live', color: 'from-orange-600 to-red-600', icon: '🎪' },
    { name: 'Interviews', count: '12 live', color: 'from-indigo-600 to-purple-600', icon: '🎙️' },
    { name: 'Karaoke', count: '18 live', color: 'from-pink-600 to-rose-600', icon: '🎵' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Live</h1>
          <p className="text-gray-400">Experience music as it happens</p>
        </div>
        <Radio className="w-8 h-8 text-red-500" />
      </div>

      {/* Featured Live Event */}
      <div className="bg-gradient-to-r from-red-900 via-pink-800 to-purple-800 rounded-xl p-8 relative overflow-hidden">
        <div className="flex items-center gap-8 relative z-10">
          <div className="relative">
            <img 
              src={liveNow.image} 
              alt={liveNow.title}
              className="w-40 h-40 rounded-lg shadow-2xl"
            />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              LIVE
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-red-400" />
              <span className="text-red-400 text-sm font-medium">HAPPENING NOW</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">{liveNow.title}</h2>
            <p className="text-xl text-pink-200 mb-1">{liveNow.artist}</p>
            <p className="text-pink-300 text-sm mb-4">{liveNow.location} • Started at {liveNow.startTime}</p>
            <div className="flex items-center gap-4 mb-6 text-pink-200">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {liveNow.viewers} watching
              </span>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Live
              </button>
              <button className="px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition-colors">
                Set Reminder
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full" />
        <div className="absolute -left-4 -top-4 w-16 h-16 bg-white/5 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Live Now */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Live Now</h2>
          <div className="space-y-4">
            {liveStreams.map((stream) => (
              <div key={stream.id} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group">
                <div className="relative">
                  <img 
                    src={stream.image} 
                    alt={stream.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">
                    LIVE
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{stream.title}</h3>
                  <p className="text-gray-400 text-sm">{stream.artist}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Users className="w-4 h-4 text-red-400" />
                    <span className="text-red-400 text-sm">{stream.viewers} watching</span>
                  </div>
                </div>
                <button className="p-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors flex items-center gap-2">
                  <Play className="w-4 h-4 text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Coming Up</h2>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group cursor-pointer">
                <div className="flex items-center gap-3">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{event.title}</h4>
                    <p className="text-xs text-gray-400 truncate">{event.artist}</p>
                    <div className="flex items-center gap-1 text-xs text-purple-400 mt-1">
                      <Clock className="w-3 h-3" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-3 h-3 text-purple-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-8 bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold mb-4">Live Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Total Viewers</span>
                <span className="text-red-400 font-medium">127.8K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Active Streams</span>
                <span className="text-green-400 font-medium">46</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Scheduled Today</span>
                <span className="text-purple-400 font-medium">23</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Browse Live Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {liveCategories.map((category, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${category.color} rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-1">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.count}</p>
              </div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Performance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-red-600 to-pink-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Live Streams</h3>
          <p className="text-3xl font-bold">46</p>
          <p className="text-red-200 text-sm mt-2">Currently broadcasting</p>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Total Viewers</h3>
          <p className="text-3xl font-bold">127.8K</p>
          <p className="text-purple-200 text-sm mt-2">Watching now</p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Upcoming</h3>
          <p className="text-3xl font-bold">23</p>
          <p className="text-blue-200 text-sm mt-2">Events today</p>
        </div>
      </div>
    </div>
  );
}

export default Live;