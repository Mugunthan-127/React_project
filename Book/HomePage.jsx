import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Background Animation */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to QuickBus</h1>
          <p>Your trusted and easy way to book bus tickets online.</p>
          <a href="/book-tickets" className="cta-btn">Book Now</a>
          {/* Quote Section */}
          <blockquote className="quote">
            "Traveling – it leaves you speechless, then turns you into a storyteller."
          </blockquote>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-container">
          <div className="feature">
            <h3>Easy Online Booking</h3>
            <p>Book your bus tickets with just a few clicks.</p>
          </div>
          <div className="feature">
            <h3>Seat Selection</h3>
            <p>Choose your preferred seats with an interactive seat map.</p>
          </div>
          <div className="feature">
            <h3>24/7 Support</h3>
            <p>We are here for you anytime, with quick responses to your queries.</p>
          </div>
          <div className="feature">
            <h3>Secure Payment</h3>
            <p>Pay securely with our trusted payment gateway.</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>For any inquiries or feedback, feel free to reach us!</p>
        <div className="contact-details">
          <div>
            <h3>Email</h3>
            <p>support@quickbus.com</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>+1 (800) 123-4567</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 QuickBus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
