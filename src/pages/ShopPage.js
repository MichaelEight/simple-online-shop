import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BuyForm from './BuyForm';
import './ShopPage.css'; // Optional: If you want to add styles

function ShopPage() {
  return (
    <div className="shop-page">
      <Navbar />
      <main>
        <h1>Shop Page</h1>
        <nav>
          <Link to="/shop/buy">Buy Product</Link>
        </nav>
        <Routes>
          <Route path="buy" element={<BuyForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default ShopPage;
