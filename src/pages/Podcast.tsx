import React from 'react';
import { Mic, Play, Clock, Users, Star } from 'lucide-react';

function Podcast() {
  const featuredPodcast = {
    title: 'The Joe Rogan Experience',
    host: 'Joe Rogan',
    description: 'The Joe Rogan Experience podcast is a long form conversation hosted by comedian Joe Rogan with friends and guests that have included comedians, actors, musicians, MMA fighters, authors, artists, and beyond.',
    episodes: 2089,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=500'
  };

  const trendingPodcasts = [
    { id: '1', title: 'Crime Junkie', host: 'Ashley Flowers', category: 'True Crime', rating: 4.9, image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', title: 'The Daily', host: 'The New York Times', category: 'News', rating: 4.7, image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '3', title: 'Conan O\'Brien Needs a Friend', host: 'Conan O\'Brien', category: 'Comedy', rating: 4.8, image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '4', title: 'Stuff You Should Know', host: 'Josh Clark & Chuck Bryant', category: 'Education', rating: 4.6, image: 'https://images.pexels.com/photos/1819653/pexels-photo-1819653.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const recentEpisodes = [
    { id: '1', title: 'The Future of AI and Technology', podcast: 'Tech Talk', duration: '45:32', date: '2 hours ago', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', title: 'Unsolved Mystery: The Missing Heiress', podcast: 'Mystery Files', duration: '38:15', date: '5 hours ago', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '3', title: 'Building Habits That Stick', podcast: 'Life Improvement', duration: '52:08', date: '1 day ago', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '4', title: 'The Science of Sleep', podcast: 'Health Matters', duration: '41:22', date: '2 days ago', image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const categories = [
    { name: 'True Crime', count: '1,247 shows', color: 'from-red-600 to-red-800', icon: '🔍' },
    { name: 'Comedy', count: '892 shows', color: 'from-yellow-500 to-orange-600', icon: '😂' },
    { name: 'News & Politics', count: '634 shows', color: 'from-blue-600 to-blue-800', icon: '📰' },
    { name: 'Business', count: '567 shows', color: 'from-green-600 to-green-800', icon: '💼' },
    { name: 'Health & Fitness', count: '423 shows', color: 'from-purple-600 to-purple-800', icon: '💪' },
    { name: 'Technology', count: '389 shows', color: 'from-cyan-600 to-cyan-800', icon: '💻' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Podcasts</h1>
          <p className="text-gray-400">Discover amazing stories, insights, and conversations</p>
        </div>
        <Mic className="w-8 h-8 text-purple-500" />
      </div>

      {/* Featured Podcast */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 rounded-xl p-8 relative overflow-hidden">
        <div className="flex items-center gap-8 relative z-10">
          <img 
            src={featuredPodcast.image} 
            alt={featuredPodcast.title}
            className="w-40 h-40 rounded-lg shadow-2xl"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-yellow-400 text-sm font-medium">FEATURED PODCAST</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">{featuredPodcast.title}</h2>
            <p className="text-xl text-purple-200 mb-2">Hosted by {featuredPodcast.host}</p>
            <div className="flex items-center gap-4 mb-4 text-purple-200">
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {featuredPodcast.episodes} episodes
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" />
                {featuredPodcast.rating}
              </span>
            </div>
            <p className="text-purple-200 mb-6 max-w-2xl text-sm leading-relaxed">
              {featuredPodcast.description}
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Play className="w-5 h-5" />
                Play Latest
              </button>
              <button className="px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trending Podcasts */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Trending This Week</h2>
          <div className="space-y-4">
            {trendingPodcasts.map((podcast, index) => (
              <div key={podcast.id} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group">
                <span className="text-2xl font-bold text-purple-500 w-8">#{index + 1}</span>
                <img 
                  src={podcast.image} 
                  alt={podcast.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{podcast.title}</h3>
                  <p className="text-gray-400 text-sm">{podcast.host}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-purple-600 px-2 py-1 rounded-full">{podcast.category}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-400">{podcast.rating}</span>
                    </div>
                  </div>
                </div>
                <button className="p-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110">
                  <Play className="w-4 h-4 text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Episodes */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Episodes</h2>
          <div className="space-y-3">
            {recentEpisodes.map((episode) => (
              <div key={episode.id} className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group cursor-pointer">
                <div className="flex items-start gap-3">
                  <img 
                    src={episode.image} 
                    alt={episode.title}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm line-clamp-2 mb-1">{episode.title}</h4>
                    <p className="text-xs text-gray-400 mb-1">{episode.podcast}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{episode.duration}</span>
                      <span>•</span>
                      <span>{episode.date}</span>
                    </div>
                  </div>
                  <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-3 h-3 text-green-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${category.color} rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform`}
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-1">{category.name}</h3>
              <p className="text-white/80 text-sm">{category.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Podcast Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Total Podcasts</h3>
          <p className="text-3xl font-bold">4,200+</p>
          <p className="text-purple-200 text-sm mt-2">Available shows</p>
        </div>
        <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">New Episodes</h3>
          <p className="text-3xl font-bold">847</p>
          <p className="text-green-200 text-sm mt-2">This week</p>
        </div>
        <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Hours of Content</h3>
          <p className="text-3xl font-bold">50K+</p>
          <p className="text-orange-200 text-sm mt-2">Total listening time</p>
        </div>
      </div>
    </div>
  );
}

export default Podcast;