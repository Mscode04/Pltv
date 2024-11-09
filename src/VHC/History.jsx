import React, { useState } from 'react';
import './History.css';
import PatientCard from './PatientCard';

const History = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleExploreMore = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="custom-navbar">
        <h1 className=''> HomeCare History</h1>
        <input type="text" placeholder="Search..." className="custom-search-bar " />
      </nav>

      {/* Category Section */}
      <div className="custom-category-section">
        <select className="custom-category-select">
          <option value="">Disease</option>
          <option value="Disease1">CA</option>
          <option value="Disease2">CVA</option>
          <option value="Disease2">CVA</option>
          <option value="Disease2">OLD AGE</option>
        </select>
        <select className="custom-category-select">
          <option value="">Nurse</option>
          <option value="Nurse1">Shemeema</option>
          <option value="Nurse2">Divya</option>
          <option value="Nurse2">Haseena</option>
        </select>
        <input type='date' className="custom-date-select" />
        <select className="custom-category-select">
  <option value="">Homecare Plan</option>
  <option value="Plan1">Daily (7/1)</option>
  <option value="Plan2">1 Day 1 week (1/1)</option>
  <option value="Plan3">2 Day 1 week (2/1)</option>
  <option value="Plan4">3 Day 1 week (3/1)</option>
  <option value="Plan5">1 Day 2 week (1/2)</option>
  <option value="Plan6">1 Day 1 month (1/4)</option>
  <option value="Plan7">1 Day 1.5 month (1/6)</option>
  <option value="Plan8">1 Day 2 month (1/8)</option>
  <option value="Plan9">1 Day 3 month (1/12)</option>
  <option value="Plan10">SOS</option>
</select>

        <select className="custom-category-select">
          <option value="">Category</option>
          <option value="Category1">NHC</option>
          <option value="Category2">DHC</option>
        </select>
        <button className="custom-filter-button">Filter</button>
      </div>

      {/* Data Table */}
      <table className="custom-data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Patient Name</th>
            <th>Disease</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => {
            const patient = {
              name: `Patient ${index + 1}`,
              disease: `Disease ${index % 3 + 1}`,
              category: `Category ${index % 2 + 1}`,
              date: `2024-10-${(index + 1).toString().padStart(2, '0')}`,
              age: 30 + index,
            };
            return (
              <tr key={index}>
                <td>{patient.date}</td>
                <td>{patient.name}</td>
                <td>{patient.disease}</td>
                <td>{patient.category}</td>
                <td>
                  <button className="custom-explore-button" onClick={() => handleExploreMore(patient)}>
                    See More
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Full-Screen Modal for PatientCard */}
      {isModalOpen && (
        <div className="custom-modal">
          <div className="custom-modal-content">
            <span className="custom-close-button" onClick={closeModal}>&times;</span>
            <div className="custom-modal-body">
              <button className="custom-back-button" onClick={closeModal}>Back</button>
              <PatientCard patient={selectedPatient} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
