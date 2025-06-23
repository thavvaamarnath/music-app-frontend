import React from 'react';
import { Download, FolderOpen, Plus, Play, MoreHorizontal } from 'lucide-react';

function Local() {
  const localTracks = [
    { id: '1', title: 'My Song', artist: 'Local Artist', album: 'Demo Album', duration: '3:20', format: 'MP3', size: '7.8 MB', image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', title: 'Guitar Riff', artist: 'Unknown', album: 'Recordings', duration: '2:15', format: 'WAV', size: '23.4 MB', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '3', title: 'Voice Memo', artist: 'Me', album: 'Ideas', duration: '1:45', format: 'M4A', size: '3.2 MB', image: 'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const folders = [
    { name: 'Downloaded Music', count: 45, size: '1.2 GB' },
    { name: 'Recordings', count: 12, size: '340 MB' },
    { name: 'Voice Memos', count: 8, size: '89 MB' },
    { name: 'Demos', count: 23, size: '567 MB' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Local Music</h1>
          <p className="text-gray-400">Your offline music collection</p>
        </div>
        <Download className="w-8 h-8 text-purple-500" />
      </div>

      {/* Upload Section */}
      <div className="bg-gray-800 rounded-xl p-8 border-2 border-dashed border-gray-600 hover:border-purple-500 transition-colors">
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Add Local Music</h3>
          <p className="text-gray-400 mb-4">Drag and drop your music files here or browse to upload</p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Browse Files
            </button>
            <button className="px-6 py-3 border border-gray-600 rounded-lg hover:border-gray-500 transition-colors">
              Add Folder
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">Supported formats: MP3, WAV, FLAC, M4A, OGG</p>
        </div>
      </div>

      {/* Storage Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Total Storage</h3>
          <p className="text-3xl font-bold">2.4 GB</p>
          <p className="text-blue-200 text-sm mt-2">of 15 GB used</p>
        </div>
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Total Songs</h3>
          <p className="text-3xl font-bold">88</p>
          <p className="text-green-200 text-sm mt-2">in local library</p>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Downloaded</h3>
          <p className="text-3xl font-bold">45</p>
          <p className="text-purple-200 text-sm mt-2">from streaming</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Folders */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-6">Folders</h2>
          <div className="space-y-3">
            {folders.map((folder, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer group">
                <FolderOpen className="w-8 h-8 text-blue-400" />
                <div className="flex-1">
                  <h3 className="font-medium">{folder.name}</h3>
                  <p className="text-sm text-gray-400">{folder.count} files • {folder.size}</p>
                </div>
                <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Local Tracks */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Local Files</h2>
            <div className="flex gap-2">
              <button className="text-gray-400 hover:text-white text-sm">Sort by: Name</button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                Play All
              </button>
            </div>
          </div>
          
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-4 py-2 text-sm text-gray-400 border-b border-gray-700">
            <div className="col-span-1">#</div>
            <div className="col-span-4">Title</div>
            <div className="col-span-2">Format</div>
            <div className="col-span-2">Size</div>
            <div className="col-span-2">Duration</div>
            <div className="col-span-1"></div>
          </div>

          {/* Track List */}
          <div className="space-y-1">
            {localTracks.map((track, index) => (
              <div key={track.id} className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors group items-center">
                <div className="col-span-1 text-gray-400">
                  <span className="group-hover:hidden">{index + 1}</span>
                  <Play className="w-4 h-4 text-white hidden group-hover:block cursor-pointer" />
                </div>
                <div className="col-span-4 flex items-center gap-3">
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
                <div className="col-span-2 text-gray-400 text-sm">{track.format}</div>
                <div className="col-span-2 text-gray-400 text-sm">{track.size}</div>
                <div className="col-span-2 text-gray-400 text-sm">{track.duration}</div>
                <div className="col-span-1">
                  <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="w-4 h-4 text-gray-400 hover:text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sync Options */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Sync Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <div>
              <h3 className="font-medium mb-1">Auto-sync downloads</h3>
              <p className="text-sm text-gray-400">Automatically sync downloaded music across devices</p>
            </div>
            <button className="w-12 h-6 bg-purple-600 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <div>
              <h3 className="font-medium mb-1">Cloud backup</h3>
              <p className="text-sm text-gray-400">Backup your local music to cloud storage</p>
            </div>
            <button className="w-12 h-6 bg-gray-600 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Local;