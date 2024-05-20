import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import './MainPage.css'; // Optional: If you want to add styles

function MainPage() {
  return (
    <div className="main-page">
      <Navbar />
      <main>
        <h1>Hello World</h1>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
