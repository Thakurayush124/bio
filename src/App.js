import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Nav';
import Home from './Home';
import Our from './Ourwork';
import Bio from './Bio';
import Civil from './Civil';
import Explore from './Explore';
import Grant from './Grant';
import Before from './Before';
import Apply from './Apply';
import Story from './Story';
import About from './About';
import Coin from './Cooin';
import Flux from './ForestFlux';
import Life from './Life';
import Aqua from './Aquatic'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index  path="/" element={<Home />} />
          <Route path="/path-to-our-work" element={<Our />} />
          <Route path="/path-to-biodiversity" element={<Bio />} />
          <Route path="/path-to-civil-society" element={<Civil />} />
          <Route path="/path-to-grant-overview" element={<Grant />} />
          <Route path="/path-to-biodiversity-hotspots" element={<Explore />} />
          <Route path="/path-to-eligibility" element={<Before />} />
          <Route path="/path-to-application-process" element={<Apply />} />
          <Route path="/path-to-who-we-are" element={<About />} />
          <Route path="/path-to-success-stories" element={<Story />} />
          <Route path="/path-to-reports" element={<Coin/>} />
          <Route path="/path-to-forestflux-" element={<Flux/>} />
          <Route path="/path-to-lifelens" element={<Life/>} />
          <Route path="/path-to-neptune’s-watch" element={<Aqua/>} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
