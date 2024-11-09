import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import HomeCareHome from './HomeCare/HomeCareHome';
import OP from './Op/OpHome';
import Medicine from './Medicine/MedHome';
import VHC from './VHC/MedicineHome';
import Navbar from './Pages/Navbar';

function App() {
  const location = useLocation();

  return (
    <div>
      {/* Only render Navbar if the current path is not the login page */}
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} /> {/* Set Login as default route */}
        <Route path="/home" element={<Home />} /> {/* Home page route */}
        <Route path="/home-care/*" element={<HomeCareHome />} />
        <Route path="/op/*" element={<OP />} />
        <Route path="/medicine/*" element={<Medicine />} />
        <Route path="/vhc/*" element={<VHC />} />
      </Routes>
    </div>
  );
}

function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default RootApp;
