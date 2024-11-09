import React, { useState } from 'react';
import './Report.css';
import PatientCard from './PatientCard'; // Ensure this import is available

const Report = () => {
  const [isDetailModalVisible, setDetailModalVisibility] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleShowMore = (patient) => {
    setSelectedPatient(patient);
    setDetailModalVisibility(true);
  };

  const closeModal = () => {
    setDetailModalVisibility(false);
    setSelectedPatient(null);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="report-header-bar">
        <h1>HomeCare Report</h1>
        <input type="text" placeholder="Search..." className="report-search-field" />
      </nav>

      {/* Category Section */}
      <div className="report-category-controls">
        <select className="report-dropdown">
          <option value="">Disease</option>
          <option value="Disease1">Disease 1</option>
          <option value="Disease2">Disease 2</option>
        </select>
        <select className="report-dropdown">
          <option value="">Nurse</option>
          <option value="Nurse1">Nurse 1</option>
          <option value="Nurse2">Nurse 2</option>
        </select>
        <input type="date" className="report-date-field" placeholder="Start Date" />
        <input type="date" className="report-date-field" placeholder="End Date" />
        <select className="report-dropdown">
          <option value="">Category</option>
          <option value="Category1">NHC</option>
          <option value="Category2">DHC</option>
        </select>
        <select className="report-dropdown">
          <option value="">Doctor</option>
          <option value="Doctor1">Doctor 1</option>
          <option value="Doctor2">Doctor 2</option>
        </select>
        <button className="report-filter-btn">Filter</button>
        <button className="report-print-btn">Print</button>
      </div>

      {/* Data Table */}
      <table className="report-data-grid">
        <thead>
          <tr>
            <th>Number</th>
            <th>Patient Name</th>
            <th>Disease</th>
            <th>Place</th>
            <th>Homecare Plan</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => {
            const patient = {
              name: `Patient ${index + 1}`,
              disease: `Disease ${index % 3 + 1}`,
              place: `Place ${index % 2 + 1}`,
              homecarePlan: `Plan ${index % 2 + 1}`,
            };
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{patient.name}</td>
                <td>{patient.disease}</td>
                <td>{patient.place}</td>
                <td>{patient.homecarePlan}</td>
                <td>
                  <button className="report-showmore-btn" onClick={() => handleShowMore(patient)}>
                    Show More
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Full-Screen Modal for PatientCard */}
      {isDetailModalVisible && (
        <div className="report-overlay-modal">
          <div className="report-modal-box">
            <div className="report-modal-body">
              <PatientCard patient={selectedPatient} />
              <button className="report-back-btn" onClick={closeModal}>Back</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Report;
