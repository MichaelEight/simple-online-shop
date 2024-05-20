import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import './AboutPage.css'; // Optional: If you want to add styles

function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />
      <main>
        <h1>About Page</h1>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
