import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import './MainPage.css'; // Optional: If you want to add styles
import RepresentationImage from '../assets/images/placeholder.png';

function MainPage() {
  return (
    <div className="main-page">
      <Navbar />
      <main>
        <div className="intro-section">
          <h1>Nazwa Sklepu</h1>
          <p>Krótki opis sklepu pod tytułem, zachęcający do zakupów.</p>
          <Link to="/shop" className="shop-button">Zrób zakupy</Link>
        </div>

        <img src={RepresentationImage} alt="Company Representation" className="main-image" />

        <h2 className='testimonials-title'>Opinie</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <blockquote>"Fantastyczna obsługa i świetne produkty!"</blockquote>
            <div className="testimonial-author">
              <img src="path/to/profile1.jpg" alt="Profile 1" className="profile-picture" />
              <span>Jan Kowalski</span>
            </div>
          </div>
          <div className="testimonial-card">
            <blockquote>"Polecam każdemu, szybka wysyłka i dobra jakość."</blockquote>
            <div className="testimonial-author">
              <img src="path/to/profile2.jpg" alt="Profile 2" className="profile-picture" />
              <span>Anna Nowak</span>
            </div>
          </div>
          <div className="testimonial-card">
            <blockquote>"Bardzo dobra komunikacja i pomoc w razie problemów."</blockquote>
            <div className="testimonial-author">
              <img src="path/to/profile3.jpg" alt="Profile 3" className="profile-picture" />
              <span>Marek Wiśniewski</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
