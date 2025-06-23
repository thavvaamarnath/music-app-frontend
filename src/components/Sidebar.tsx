import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Search, 
  Music, 
  Disc, 
  Mic, 
  Radio, 
  Clock, 
  Heart, 
  Download,
  Plus,
  Calendar,
  Headphones,
  Chrome
} from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 p-6 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
          <Headphones className="w-5 h-5" />
        </div>
        <span className="text-xl font-bold">Groovy</span>
      </div>

      {/* Menu Section */}
      <div className="mb-8">
        <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">Menu</h3>
        <nav className="space-y-2">
          <NavLink 
            to="/explore" 
            className={({ isActive }) => 
              `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                isActive ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            <Search className="w-5 h-5" />
            <span>Explore</span>
          </NavLink>
          <NavLink 
            to="/genres" 
            className={({ isActive }) => 
              `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                isActive ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            <Music className="w-5 h-5" />
            <span>Genres</span>
          </NavLink>
          <NavLink 
            to="/albums" 
            className={({ isActive }) => 
              `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                isActive ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            <Disc className="w-5 h-5" />
            <span>Album</span>
          </NavLink>
          <NavLink 
            to="/artists" 
            className={({ isActive }) => 
              `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                isActive ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            <Mic className="w-5 h-5" />
            <span>Artist</span>
          </NavLink>
          <NavLink 
            to="/radio" 
            className={({ isActive }) => 
              `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                isActive ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            <Radio className="w-5 h-5" />
            <span>Radio</span>
          </NavLink>
        </nav>
      </div>

      {/* Library Section */}
      <div className="mb-8">
        <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">Library</h3>
        <nav className="space-y-2">
          <NavLink 
            to="/recents" 
            className={({ isActive }) => 
              `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                isActive ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            <Clock className="w-5 h-5" />
            <span>Recents</span>
          </NavLink>
          <NavLink 
            to="/favourites" 
            className={({ isActive }) => 
              `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                isActive ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            <Heart className="w-5 h-5" />
            <span>Favourite</span>
          </NavLink>
          <NavLink 
            to="/local" 
            className={({ isActive }) => 
              `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                isActive ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            <Download className="w-5 h-5" />
            <span>Local</span>
          </NavLink>
        </nav>
      </div>

      {/* Playlist Section */}
      <div className="mb-8">
        <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">Playlist</h3>
        <nav className="space-y-2">
          <NavLink 
            to="/playlists" 
            className={({ isActive }) => 
              `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                isActive ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            <Plus className="w-5 h-5" />
            <span>Create New</span>
          </NavLink>
          <NavLink 
            to="/playlists" 
            className="flex items-center gap-3 p-2 rounded-lg transition-colors text-gray-300 hover:bg-gray-700"
          >
            <Calendar className="w-5 h-5" />
            <span>Best of 2023</span>
          </NavLink>
          <NavLink 
            to="/playlists" 
            className="flex items-center gap-3 p-2 rounded-lg transition-colors text-gray-300 hover:bg-gray-700"
          >
            <Music className="w-5 h-5" />
            <span>Jamming</span>
          </NavLink>
        </nav>
      </div>

      {/* Google Download */}
      <div className="mt-auto">
        <div className="bg-gray-700 p-3 rounded-lg flex items-center gap-3">
          <Chrome className="w-5 h-5 text-blue-400" />
          <div>
            <p className="text-sm font-medium">Google</p>
            <p className="text-xs text-gray-400">Download</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;