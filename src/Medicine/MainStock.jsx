import React, { useState } from 'react';
import './MainStock.css'
const MainStock = () => {
  const [filter, setFilter] = useState({
    sort: '',
    category: '',
    supplier: '',
  });

  const [stockItems] = useState([
    { id: 1, name: 'Amoxicillin', quantity: 120, category: 'Antibiotics', supplier: 'PharmaCorp' },
    { id: 2, name: 'Ibuprofen', quantity: 75, category: 'Pain Relief', supplier: 'MedShop' },
    { id: 3, name: 'Paracetamol', quantity: 200, category: 'Pain Relief', supplier: 'PharmaCorp' },
    { id: 4, name: 'Ciprofloxacin', quantity: 30, category: 'Antibiotics', supplier: 'HealthPlus' },
    { id: 5, name: 'Lisinopril', quantity: 50, category: 'Heart Health', supplier: 'MedShop' },
    // Add more dummy data as needed
  ]);

  const [filteredStock, setFilteredStock] = useState(stockItems);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const applyFilter = () => {
    let newFilteredStock = [...stockItems];

    // Filter by category
    if (filter.category) {
      newFilteredStock = newFilteredStock.filter(item => item.category === filter.category);
    }

    // Filter by supplier
    if (filter.supplier) {
      newFilteredStock = newFilteredStock.filter(item => item.supplier === filter.supplier);
    }

    // Sort by quantity
    if (filter.sort === 'low-to-high') {
      newFilteredStock.sort((a, b) => a.quantity - b.quantity);
    } else if (filter.sort === 'high-to-low') {
      newFilteredStock.sort((a, b) => b.quantity - a.quantity);
    }

    setFilteredStock(newFilteredStock);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="main-stock-container">
      <h2>Medicine Stock</h2>

      {/* Filter Section */}
      <div className="filter-section">
        <label>
          Sort by Quantity:
          <select name="sort" value={filter.sort} onChange={handleFilterChange}>
            <option value="">Select</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </label>

        <label>
          Category:
          <select name="category" value={filter.category} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Antibiotics">Antibiotics</option>
            <option value="Pain Relief">Pain Relief</option>
            <option value="Heart Health">Heart Health</option>
          </select>
        </label>

        <label>
          Supplier:
          <select name="supplier" value={filter.supplier} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="PharmaCorp">PharmaCorp</option>
            <option value="MedShop">MedShop</option>
            <option value="HealthPlus">HealthPlus</option>
          </select>
        </label>

        <button className="filter-button" onClick={applyFilter}>Apply Filter</button>
        <button onClick={handlePrint}>Print</button>
      </div>

      {/* Stock Table */}
      <table className="stock-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Medicine Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Purchased From</th>
          </tr>
        </thead>
        <tbody>
          {filteredStock.length > 0 ? (
            filteredStock.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.category}</td>
                <td>{item.supplier}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MainStock;
