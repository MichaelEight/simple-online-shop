// src/components/BuyForm.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from '../context';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import './BuyForm.css'; // Optional: If you want to add styles

function BuyForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productName = queryParams.get('product');

  const { isLoggedIn, userData } = useAppContext();

  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    address: '',
    product: productName || 'UNKNOWN',
    quantity: 1,
    usernote: ''
  });

  useEffect(() => {
    if (isLoggedIn && userData) {
      setFormData((prevData) => ({
        ...prevData,
        name: userData.name,
        lastname: userData.lastname,
        email: userData.email,
        address: userData.address,
        product: productName || 'UNKNOWN',
        quantity: 1,
        usernote: ''
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        product: productName || 'UNKNOWN'
      }));
    }
  }, [isLoggedIn, productName, userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'orders'), {
        ...formData,
        timeoforder: serverTimestamp()
      });
      console.log('Order submitted:', formData);
      setFormData({
        name: '',
        lastname: '',
        email: '',
        address: '',
        product: productName || 'UNKNOWN',
        quantity: 1,
        usernote: ''
      });
    } catch (error) {
      console.error('Error submitting order:', error);
    }
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
          name="usernote"
          id="usernote"
          value={formData.usernote}
          onChange={handleChange}
        />
        
        <button type="submit">Kup Teraz</button>
      </form>
    </div>
  );
}

export default BuyForm;
