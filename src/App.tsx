import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Explore from './pages/Explore';
import Music from './pages/Music';
import Podcast from './pages/Podcast';
import Live from './pages/Live';
import Genres from './pages/Genres';
import Albums from './pages/Albums';
import Artists from './pages/Artists';
import Radio from './pages/Radio';
import Recents from './pages/Recents';
import Favourites from './pages/Favourites';
import Local from './pages/Local';
import Playlists from './pages/Playlists';
import { MusicPlayerProvider } from './context/MusicPlayerContext';

function App() {
  return (
    <MusicPlayerProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Explore />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/music" element={<Music />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/live" element={<Live />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/radio" element={<Radio />} />
            <Route path="/recents" element={<Recents />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/local" element={<Local />} />
            <Route path="/playlists" element={<Playlists />} />
          </Routes>
        </Layout>
      </Router>
    </MusicPlayerProvider>
  );
}

export default App;