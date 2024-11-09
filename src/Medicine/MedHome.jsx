import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './MedHome.css'; // Create this CSS file for styling

import Purchase from './Purchase'; // Import your components for each route
import MainStock from './MainStock';
import History from './History';
import PurchaseHistory from './PurchaseHistory';

const MedHome = () => {
  return (
    <div className="medhome-container">
      <aside className="sidebar">
        <div className="head"><h2>Medicine</h2></div>
        <ul className="menu">
          <li><Link className='the' to="purchase">Purchase</Link></li>
          <li><Link className='the' to="pur-home">Report</Link></li>
          <li><Link className='the' to="main-stock">Main Stock</Link></li>
          <li><Link className='the' to="history">History</Link></li>
        </ul>
      </aside>
      <main className="content">
        <Routes>
          <Route path="/" element={<div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="card shadow-lg p-4 text-center" >
      <h1 class="card-title mb-3">Welcome to Medicine Home</h1>
      <p class="card-text">Select an option from the side menu to get started.</p>
    </div>
  </div>} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="main-stock" element={<MainStock />} />
          <Route path="history" element={<History />} />
          <Route path="pur-home" element={<PurchaseHistory />} />
        </Routes>
      </main>
    </div>
  );
};

export default MedHome;
