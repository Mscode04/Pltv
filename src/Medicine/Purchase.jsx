import React, { useState } from 'react';
import './Purchase.css';

const Purchase = () => {
  const [formData, setFormData] = useState({
    supplierName: '',
    invoiceNumber: '',
    date: '',
    medicationName: '',
    newMedication: '',
    quantity: '',
    unitPrice: '',
    totalPrice: '',
    paymentMethod: '',
    additionalNotes: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateTotalPrice = () => {
    const total = formData.quantity * formData.unitPrice;
    setFormData({ ...formData, totalPrice: total });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Purchase Data Submitted:', formData);
    setFormData({
      supplierName: '',
      invoiceNumber: '',
      date: '',
      medicationName: '',
      newMedication: '',
      quantity: '',
      unitPrice: '',
      totalPrice: '',
      paymentMethod: '',
      additionalNotes: '',
      category: '',
    });
  };

  return (
    <div className="unique-purchase-container">
      <h2>Add New Purchase Bill</h2>
      <form onSubmit={handleSubmit} className="unique-purchase-form">
        <div className="unique-form-group">
          <label htmlFor="supplierName">Supplier Name:</label>
          <input
            type="text"
            id="supplierName"
            name="supplierName"
            placeholder="Enter supplier name"
            value={formData.supplierName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="unique-form-group">
          <label htmlFor="invoiceNumber">Invoice Number:</label>
          <input
            type="text"
            id="invoiceNumber"
            name="invoiceNumber"
            placeholder="Enter invoice number"
            value={formData.invoiceNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="unique-form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Select date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="unique-form-group">
          <label htmlFor="medicationName">Medication Name:</label>
          <select
            id="medicationName"
            name="medicationName"
            value={formData.medicationName}
            onChange={handleChange}
            required
          >
            <option value="">Select Medication</option>
            <option value="medicine1">Medicine 1</option>
            <option value="medicine2">Medicine 2</option>
            <option value="medicine3">Medicine 3</option>
            <option value="addNew">Add New Medicine</option>
          </select>
          {formData.medicationName === 'addNew' && (
            <input
              type="text"
              placeholder="Enter new medicine name"
              name="newMedication"
              value={formData.newMedication}
              onChange={handleChange}
              required
            />
          )}
        </div>

        <div className="unique-form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="antibiotics">Antibiotics</option>
            <option value="pain_relief">Pain Relief</option>
            <option value="vitamins">Vitamins</option>
            <option value="antiseptics">Antiseptics</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="unique-form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Enter quantity"
            value={formData.quantity}
            onChange={(e) => {
              handleChange(e);
              calculateTotalPrice();
            }}
            required
          />
        </div>

        <div className="unique-form-group">
          <label htmlFor="unitPrice">Unit Price:</label>
          <input
            type="number"
            id="unitPrice"
            name="unitPrice"
            placeholder="Enter unit price"
            value={formData.unitPrice}
            onChange={(e) => {
              handleChange(e);
              calculateTotalPrice();
            }}
            required
          />
        </div>

        <div className="unique-form-group">
          <label htmlFor="totalPrice">Total Price:</label>
          <input
            type="number"
            id="totalPrice"
            name="totalPrice"
            placeholder="Calculated total price"
            value={formData.totalPrice}
            readOnly
          />
        </div>

        <div className="unique-form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="cash">Cash</option>
            <option value="credit_card">Credit Card</option>
            <option value="debit_card">Debit Card</option>
            <option value="online_transfer">Online Transfer</option>
          </select>
        </div>

        <div className="unique-form-group">
          <label htmlFor="additionalNotes">Additional Notes:</label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            placeholder="Enter any additional notes"
            value={formData.additionalNotes}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className="unique-submit-button">Submit Purchase</button>
      </form>
    </div>
  );
};

export default Purchase;
