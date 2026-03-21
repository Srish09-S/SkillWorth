import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Docs from './pages/Docs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f0f0f] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <Navbar />
          <Routes>
            {/* The Main Scanner Page */}
            <Route path="/" element={<Home />} />
            {/* The Documentation Page */}
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;