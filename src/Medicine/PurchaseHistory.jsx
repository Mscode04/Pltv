import React, { useState } from 'react';
import './PurchaseHistory.css'
const PurchaseHistory = () => {
  const [filter, setFilter] = useState({
    category: '',
    supplier: '',
    medicationName: '',
  });

  const [purchases] = useState([
    {
      id: 1,
      category: 'Antibiotics',
      supplier: 'PharmaCorp',
      medicationName: 'Amoxicillin',
      purchaseDate: '2024-10-01',
      quantity: 100,
      pricePerUnit: 1.5,
      totalPrice: 150,
      batchNo: 'A123',
      expiryDate: '2025-10-01',
      purchasedBy: 'Dr. Smith',
    },
    {
      id: 2,
      category: 'Pain Relief',
      supplier: 'MedShop',
      medicationName: 'Ibuprofen',
      purchaseDate: '2024-10-05',
      quantity: 50,
      pricePerUnit: 0.8,
      totalPrice: 40,
      batchNo: 'B456',
      expiryDate: '2026-04-01',
      purchasedBy: 'Dr. Taylor',
    },
    {
      id: 2,
      category: 'Pain Relief',
      supplier: 'MedShop',
      medicationName: 'Ibuprofen',
      purchaseDate: '2024-10-05',
      quantity: 50,
      pricePerUnit: 0.8,
      totalPrice: 40,
      batchNo: 'B456',
      expiryDate: '2026-04-01',
      purchasedBy: 'Dr. Taylor',
    },{
      id: 2,
      category: 'Pain Relief',
      supplier: 'MedShop',
      medicationName: 'Ibuprofen',
      purchaseDate: '2024-10-05',
      quantity: 50,
      pricePerUnit: 0.8,
      totalPrice: 40,
      batchNo: 'B456',
      expiryDate: '2026-04-01',
      purchasedBy: 'Dr. Taylor',
    }
    // Add more sample data as needed
  ]);

  const [filteredPurchases, setFilteredPurchases] = useState(purchases);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const applyFilter = () => {
    const newFilteredPurchases = purchases.filter((purchase) => {
      return (
        (filter.category === '' || purchase.category === filter.category) &&
        (filter.supplier === '' || purchase.supplier === filter.supplier) &&
        (filter.medicationName === '' || purchase.medicationName === filter.medicationName)
      );
    });
    setFilteredPurchases(newFilteredPurchases);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="purchase-history-container">
      <h2>Purchase History</h2>
      
      {/* Filter Section */}
      <div className="filter-section">
        <label>
          Category:
          <select name="category" value={filter.category} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Antibiotics">Antibiotics</option>
            <option value="Pain Relief">Pain Relief</option>
          </select>
        </label>

        <label>
          Supplier:
          <select name="supplier" value={filter.supplier} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="PharmaCorp">PharmaCorp</option>
            <option value="MedShop">MedShop</option>
          </select>
        </label>

        <label>
          Medication Name:
          <select name="medicationName" value={filter.medicationName} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Amoxicillin">Amoxicillin</option>
            <option value="Ibuprofen">Ibuprofen</option>
          </select>
        </label>

        <button className="filter-button" onClick={applyFilter}>Apply Filter</button>
        <button onClick={handlePrint}>Print</button>
      </div>

      {/* Purchase Table */}
      <table className="purchase-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Category</th>
            <th>Supplier</th>
            <th>Medication Name</th>
            <th>Purchase Date</th>
            <th>Quantity</th>
            <th>Price per Unit</th>
            <th>Total Price</th>
            <th>Batch No</th>
            <th>Expiry Date</th>
            <th>Purchased By</th>
          </tr>
        </thead>
        <tbody>
          {filteredPurchases.length > 0 ? (
            filteredPurchases.map((purchase, index) => (
              <tr key={purchase.id}>
                <td>{index + 1}</td>
                <td>{purchase.category}</td>
                <td>{purchase.supplier}</td>
                <td>{purchase.medicationName}</td>
                <td>{purchase.purchaseDate}</td>
                <td>{purchase.quantity}</td>
                <td>${purchase.pricePerUnit.toFixed(2)}</td>
                <td>${purchase.totalPrice.toFixed(2)}</td>
                <td>{purchase.batchNo}</td>
                <td>{purchase.expiryDate}</td>
                <td>{purchase.purchasedBy}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11">No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseHistory;
