import React from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat,
  Volume2,
  Maximize2,
  FileText
} from 'lucide-react';
import { useMusicPlayer } from '../context/MusicPlayerContext';

function MusicPlayer() {
  const { currentTrack, isPlaying, currentTime, duration, togglePlay } = useMusicPlayer();

  if (!currentTrack) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / duration) * 100;

  return (
    <div className="w-80 bg-gray-800 p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Player</h3>
        <Maximize2 className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
      </div>

      {/* Current Track */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-48 h-48 rounded-lg overflow-hidden mb-4 shadow-2xl">
          <img 
            src={currentTrack.image} 
            alt={currentTrack.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="text-xl font-bold mb-1">{currentTrack.title}</h4>
        <p className="text-gray-400 mb-1">{currentTrack.artist}</p>
        <p className="text-sm text-gray-500">{currentTrack.album}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>{formatTime(currentTime)}</span>
          <span>{currentTrack.duration}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Maximize2 className="w-5 h-5" />
        </button>
        <button className="p-3 text-gray-400 hover:text-white transition-colors">
          <SkipBack className="w-6 h-6" />
        </button>
        <button 
          onClick={togglePlay}
          className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>
        <button className="p-3 text-gray-400 hover:text-white transition-colors">
          <SkipForward className="w-6 h-6" />
        </button>
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Shuffle className="w-5 h-5" />
        </button>
      </div>

      {/* Additional Controls */}
      <div className="flex items-center justify-center">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Lyrics
        </button>
      </div>
    </div>
  );
}

export default MusicPlayer;