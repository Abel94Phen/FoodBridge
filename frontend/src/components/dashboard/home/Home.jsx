import React from 'react';
import './Home.css'; // Import CSS for Home component
import HeroImage from '../../assets/FoodCircle.jpg'; // Assuming you have an image in your assets folder

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src={HeroImage} alt="FoodBridge Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to FoodBridge</h1>
          <p>Connecting surplus food with those in need, creating a more sustainable and equitable food system.</p>
          <button className="cta-button">Get Involved</button>
        </div>
      </div>

      <div className="home-highlights">
        <div className="highlight">
          <h3>Our Mission</h3>
          <p>To create a more sustainable and equitable food system across Africa.</p>
        </div>
        <div className="highlight">
          <h3>Get Involved</h3>
          <p>Learn how you can contribute to our cause by donating food or requesting food for your organization.</p>
        </div>
        <div className="highlight">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#inventory">View Inventory</a></li>
            <li><a href="#donation-stats">Donation Stats</a></li>
            <li><a href="#requests">Make a Request</a></li>
          </ul>
        </div>
      </div>

      <div className="testimonial-section">
        <h2>What People Are Saying</h2>
        <div className="testimonials">
          <blockquote>
            <p>"FoodBridge has changed the way we think about food waste. It's a fantastic initiative!"</p>
            <cite>- Jane Doe, Local Restaurant Owner</cite>
          </blockquote>
          <blockquote>
            <p>"Thanks to FoodBridge, we've been able to provide meals to hundreds of families in need."</p>
            <cite>- John Smith, NGO Worker</cite>
          </blockquote>
        </div>
      </div>

      <div className="stats-section">
        <h2>Our Impact</h2>
        <div className="stats">
          <div className="stat">
            <h3>10,000+</h3>
            <p>Meals Distributed</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Donors</p>
          </div>
          <div className="stat">
            <h3>100+</h3>
            <p>Partner Organizations</p>
          </div>
        </div>
      </div>

      <div className="newsletter-section">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter to get the latest updates and news.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
