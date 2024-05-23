// src/components/BuyForm.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from '../context';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../security/firebase';
import './BuyForm.css'; // Optional: If you want to add styles

function BuyForm({ product }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const { isLoggedIn, userData } = useAppContext();

  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    address: '',
    product: product.name || 'UNKNOWN',
    productId: product.id || '',
    quantity: 1,
    usernote: ''
  });

  const [feedback, setFeedback] = useState('');
  const [feedbackColor, setFeedbackColor] = useState('');
  const [buttonCooldown, setButtonCooldown] = useState(false);

  useEffect(() => {
    if (isLoggedIn && userData) {
      setFormData((prevData) => ({
        ...prevData,
        name: userData.name,
        lastname: userData.lastname,
        email: userData.email,
        address: userData.address,
        product: product.name || 'UNKNOWN',
        productId: product.id || '',
        quantity: 1,
        usernote: ''
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        product: product.name || 'UNKNOWN',
        productId: product.id || ''
      }));
    }
  }, [isLoggedIn, product, userData]);

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
      setFeedback('Order submitted successfully!');
      setFeedbackColor('green');
      console.log('Order submitted:', formData);
      setFormData({
        name: '',
        lastname: '',
        email: '',
        address: '',
        product: product.name || 'UNKNOWN',
        productId: product.id || '',
        quantity: 1,
        usernote: ''
      });
    } catch (error) {
      setFeedback(`Error submitting order: ${error.message}`);
      setFeedbackColor('red');
      console.error('Error submitting order:', error);
    }
    setButtonCooldown(true);
    setTimeout(() => setButtonCooldown(false), 2000);
  };

  const isFormValid = formData.name && formData.lastname && formData.email && formData.address && formData.quantity > 0;

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
        
        <button type="submit" disabled={!isFormValid || buttonCooldown}>Kup Teraz</button>
      </form>
      {feedback && <p className="feedback" style={{ color: feedbackColor }}>{feedback}</p>}
    </div>
  );
}

export default BuyForm;
