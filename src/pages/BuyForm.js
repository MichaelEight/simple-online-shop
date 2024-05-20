import React, { useState } from 'react';
import './BuyForm.css'; // Optional: If you want to add styles

function BuyForm() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    address: '',
    product: 'UNKNOWN',
    quantity: 1,
    usernote: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="buy-form">
      <h2>Kup Produkt</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product">Produkt:</label>
        <div className="product-value">{formData.product}</div>
        
        <label htmlFor="quantity">Ilość:</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={formData.quantity}
          onChange={handleChange}
          min="1"
          max="999999"
          required
        />

        <label htmlFor="name">Imię:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="lastname">Nazwisko:</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Adres:</label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="usernote">Uwagi:</label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.usernote}
          multiple="true"
          onChange={handleChange}
        />
        
        <button type="submit">Kup Teraz</button>
      </form>
    </div>
  );
}

export default BuyForm;
