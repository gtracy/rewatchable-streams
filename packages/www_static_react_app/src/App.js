import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EpisodeList from './components/EpisodeList';
import EpisodeDetail from './components/EpisodeDetail';

function App() {
  return (
    <Router>
      <div className="App container">
        <Routes>
          <Route path="/" element={<EpisodeList />} />
          <Route path="/episode/:episodeId" element={<EpisodeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
