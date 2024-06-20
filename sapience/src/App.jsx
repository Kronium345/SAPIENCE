import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
// import News from './pages/News/News';
// import News1 from './pages/News/News1';
// import News2 from './pages/News/News2';
// import News3 from './pages/News/News3';
// import News4 from './pages/News/News4';
import Activities from './pages/Activities/Activities';
import CityTeam from './pages/Team/CityTeam';
import UAHTeam from './pages/Team/UAHTeam';
import DUTTeam from './pages/Team/DUTTeam';
import UoKTeam from './pages/Team/UoKTeam';
import Competitions from './pages/Competitions/Competitions';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city-team" element={<CityTeam />} />
        <Route path="/dut-team" element={<DUTTeam />} />
        <Route path="/uah-team" element={<UAHTeam />} />
        <Route path="/uok-team" element={<UoKTeam />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/competitions" element={<Competitions />} />
        {/* <Route path="/news" element={<News />} />
        <Route path="/first-news" element={<News1 />} />
        <Route path="/second-news" element={<News2 />} />
        <Route path="/third-news" element={<News3 />} />
        <Route path="/fourth-news" element={<News4 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
