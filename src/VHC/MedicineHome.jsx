import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './MedicineHome.css'; // Create this CSS file for styling

import AddPatient from './AddPatient'; // Import the components for each route
import SearchPatient from './Search';
import Report from './Report';
import History from './History';
import Search from './Search';

const MedicineHome = () => {
  return (
    <div className="medicine-home-container">
      <aside className="sidebar">
        <div className="head"><h2>VHC/GVHC</h2></div>
        <ul className="menu">
          <li><Link className='the' to="add-patient">Add New</Link></li>
          <li><Link className='the' to="search-patient">Search</Link></li>
          <li><Link className='the' to="report">Report</Link></li>
          <li><Link className='the' to="history">History</Link></li>
        </ul>
      </aside>
      <main className="content">
        <Routes>
          <Route path="/" element={<div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="card shadow-lg p-4 text-center" >
      <h1 class="card-title mb-3">Welcome to VHC / GVHC Home</h1>
      <p class="card-text">Select an optiggtgon from the side menu to get started.</p>
    </div>
  </div>
} />
          <Route path="add-patient" element={<AddPatient />} />
          <Route path="search-patient" element={<Search />} />
          <Route path="report" element={<Report />} />
          <Route path="history" element={<History />} />
        </Routes>
      </main>
    </div>
  );
};

export default MedicineHome;
