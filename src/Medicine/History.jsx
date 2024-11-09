import React, { useState } from 'react';
import './History.css'
const History = () => {
  const [filters, setFilters] = useState({
    medicineName: '',
    patientName: '',
    nurseName: '',
    category: '',
    startDate: '',
    endDate: '',
  });

  const [transactions] = useState([
    {
      id: 1,
      date: '2024-10-01',
      medicineName: 'Amoxicillin',
      qtyGiven: 2,
      category: 'Antibiotic',
      patientName: 'John Doe',
      nurseName: 'Nurse A',
    },
    {
      id: 2,
      date: '2024-10-02',
      medicineName: 'Ibuprofen',
      qtyGiven: 1,
      category: 'Pain Relief',
      patientName: 'Jane Smith',
      nurseName: 'Nurse B',
    },
    {
      id: 3,
      date: '2024-10-03',
      medicineName: 'Paracetamol',
      qtyGiven: 3,
      category: 'Pain Relief',
      patientName: 'Alice Johnson',
      nurseName: 'Nurse C',
    },
    // Add more sample data as needed
  ]);

  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    const newFilteredTransactions = transactions.filter((transaction) => {
      const withinDateRange =
        (!filters.startDate || new Date(transaction.date) >= new Date(filters.startDate)) &&
        (!filters.endDate || new Date(transaction.date) <= new Date(filters.endDate));
      return (
        (filters.medicineName === '' || transaction.medicineName === filters.medicineName) &&
        (filters.patientName === '' || transaction.patientName === filters.patientName) &&
        (filters.nurseName === '' || transaction.nurseName === filters.nurseName) &&
        (filters.category === '' || transaction.category === filters.category) &&
        withinDateRange
      );
    });
    setFilteredTransactions(newFilteredTransactions);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="history-container">
      <h2>Medicine Transaction History</h2>
      
      {/* Filter Section */}
      <div className="filter-section">
        <label>
          Medicine Name:
          <input type="text" name="medicineName" value={filters.medicineName} onChange={handleFilterChange} />
        </label>

        <label>
          Patient Name:
          <input type="text" name="patientName" value={filters.patientName} onChange={handleFilterChange} />
        </label>

        <label>
          Nurse Name:
          <input type="text" name="nurseName" value={filters.nurseName} onChange={handleFilterChange} />
        </label>

        <label>
          Category:
          <input type="text" name="category" value={filters.category} onChange={handleFilterChange} />
        </label>

        <label>
          Start Date:
          <input type="date" name="startDate" value={filters.startDate} onChange={handleFilterChange} />
        </label>

        <label>
          End Date:
          <input type="date" name="endDate" value={filters.endDate} onChange={handleFilterChange} />
        </label>

        <button className="filter-button" onClick={applyFilters}>Filter</button>
        <button onClick={handlePrint}>Print</button>
      </div>

      {/* Transaction Table */}
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Medicine Name</th>
            <th>Quantity Given</th>
            <th>Category</th>
            <th>Patient Name</th>
            <th>Nurse Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.medicineName}</td>
                <td>{transaction.qtyGiven}</td>
                <td>{transaction.category}</td>
                <td>{transaction.patientName}</td>
                <td>{transaction.nurseName}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default History;
