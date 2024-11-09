import React, { useState } from 'react';
import './Search.css'; // Ensure to add styles as needed
import PatientCard from './PatientCard'; // Import PatientCard component

const Search = () => {
  // Dummy data for the table
  const data = [
    { id: 1, name: 'John Doe', place: 'New York', disease: 'Diabetes' },
    { id: 2, name: 'Jane Smith', place: 'Los Angeles', disease: 'Hypertension' },
    { id: 3, name: 'Michael Johnson', place: 'Chicago', disease: 'Asthma' },
    { id: 4, name: 'Emily Davis', place: 'Houston', disease: 'Arthritis' },
    { id: 5, name: 'David Brown', place: 'Phoenix', disease: 'Cardiovascular' },
    { id: 6, name: 'Sarah Wilson', place: 'Philadelphia', disease: 'Allergy' },
    { id: 7, name: 'Robert Garcia', place: 'San Antonio', disease: 'Migraine' },
    { id: 8, name: 'Linda Martinez', place: 'San Diego', disease: 'Back Pain' },
    { id: 9, name: 'William Rodriguez', place: 'Dallas', disease: 'Flu' },
    { id: 10, name: 'Elizabeth Lee', place: 'San Jose', disease: 'COVID-19' },
  ];

  // State to control modal visibility and selected patient
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleSeeMore = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  return (
    <div className="search-container">
      <h2>Search Entries</h2>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>

      <h3>Search Results:</h3>
      <table className="results-table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Patient Name</th>
            <th>Place</th>
            <th>Disease</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.name}</td>
              <td>{entry.place}</td>
              <td>{entry.disease}</td>
              <td>
                <button type="button" onClick={() => handleSeeMore(entry)}>See More</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Full-Screen Modal for PatientCard */}
      {isModalOpen && (
        <div className="full-screen-modal">
          <div className="modal-content">
            <div className="modal-body">
              <PatientCard />
              <button className="back-button" onClick={closeModal}>Back</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
