import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './HomeCareHome.css';

import History from './History';
import Report from './Report';

const HomeCareHome = () => {
  return (
    <div className="homecare-container">
      <aside className="sidebar">
        <div className="head"><h2>Home Care</h2></div>
        <ul className="menu ">
          <li><Link className='the menuHomeCare careh' to="history">History</Link></li>
          <li><Link className='the menuHomeCare ' to="report">Report</Link></li>
        </ul>
      </aside>
      <main className="content">
        <Routes>
        <Route path="/" element={<div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="card shadow-lg p-4 text-center" >
      <h1 class="card-title mb-3">Welcome to Home Care Page</h1>
      <p class="card-text">Select an option from the side menu to get started.</p>
    </div>
  </div>} />
           <Route path="history/*" element={<History />} />
          <Route path="report/*" element={<Report />} />
        </Routes>
      </main>
    </div>
  );
};

export default HomeCareHome;
