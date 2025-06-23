import React, { useState } from 'react';
import { Search, Bell, Settings, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(() => {
    if (location.pathname === '/music') return 'MUSIC';
    if (location.pathname === '/podcast') return 'PODCAST';
    if (location.pathname === '/live') return 'LIVE';
    return 'MUSIC';
  });

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case 'MUSIC':
        navigate('/music');
        break;
      case 'PODCAST':
        navigate('/podcast');
        break;
      case 'LIVE':
        navigate('/live');
        break;
    }
  };

  return (
    <header className="flex items-center justify-between p-6 border-b border-gray-700">
      {/* Navigation Tabs */}
      <div className="flex items-center gap-8">
        <button 
          onClick={() => handleTabClick('MUSIC')}
          className={`font-medium pb-1 transition-colors ${
            activeTab === 'MUSIC' 
              ? 'text-purple-400 border-b-2 border-purple-400' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          MUSIC
        </button>
        <button 
          onClick={() => handleTabClick('PODCAST')}
          className={`font-medium pb-1 transition-colors ${
            activeTab === 'PODCAST' 
              ? 'text-purple-400 border-b-2 border-purple-400' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          PODCAST
        </button>
        <button 
          onClick={() => handleTabClick('LIVE')}
          className={`font-medium pb-1 transition-colors ${
            activeTab === 'LIVE' 
              ? 'text-purple-400 border-b-2 border-purple-400' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          LIVE
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Type here to search"
            className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* User Controls */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Settings className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 bg-gray-700 rounded-lg p-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
          <span className="text-sm font-medium">Mritvij</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
}

export default Header;