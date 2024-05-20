import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BuyForm from './BuyForm';
import './ShopPage.css'; // Optional: If you want to add styles

const products = [
  { id: 1, name: 'Product 1', description: 'This is product 1', price: '$10', image: 'path/to/image1.jpg' },
  { id: 2, name: 'Product 2', description: 'This is product 2', price: '$20', image: 'path/to/image2.jpg' },
  { id: 3, name: 'Product 3', description: 'This is product 3', price: '$30', image: 'path/to/image3.jpg' },
  { id: 4, name: 'Product 4', description: 'This is product 4', price: '$40', image: 'path/to/image4.jpg' },
  { id: 5, name: 'Product 5', description: 'This is product 5', price: '$50', image: 'path/to/image5.jpg' },
  { id: 6, name: 'Product 6', description: 'This is product 6', price: '$60', image: 'path/to/image6.jpg' },
];

function ShopPage() {
  const navigate = useNavigate();

  const handleBuyClick = (productName) => {
    navigate(`/shop/buy?product=${productName}`);
  };

  return (
    <div className="shop-page">
      <Navbar />
      <main>
        <h1>Shop Page</h1>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.name} className="card-image" />
              <div className="card-content">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <button onClick={() => handleBuyClick(product.name)} className="buy-button">Buy</button>
              </div>
            </div>
          ))}
        </div>
        <Routes>
          <Route path="buy" element={<BuyForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default ShopPage;
