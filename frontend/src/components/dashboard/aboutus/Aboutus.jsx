import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="about-us-container">
      <p className="intro">Welcome to FoodBridge! We are dedicated to reducing hunger and food waste in Ethiopia by connecting businesses with excess food to organizations that help those in need.</p>
      <div className="section mission">
        <div className="icon">&#x1F4E6;</div>
        <div>
          <h3>Our Mission</h3>
          <p>Our mission is to create a more sustainable and equitable food system by ensuring that surplus food reaches those who need it most. We believe in the power of community and innovation to drive change and make a positive impact on society.</p>
        </div>
      </div>
      <div className="section vision">
        <div className="icon">&#x1F31F;</div>
        <div>
          <h3>Our Vision</h3>
          <p>We envision a world where no one goes hungry and food waste is a thing of the past. Through collaboration and technology, we aim to bridge the gap between excess and need, fostering a community of care and responsibility.</p>
        </div>
      </div>
      <div className="section contact">
        <div className="icon">&#x1F4E7;</div>
        <div>
          <h3>Contact Us</h3>
          <p>If you have any questions or would like to get involved, please reach out to us at:</p>
          <p>Email: <a href="mailto:contact@foodbridge.org">contact@foodbridge.org</a></p>
          <p>Phone: +251-123-456-789</p>
          <p>Address: 123 FoodBridge Street, Addis Ababa, Ethiopia</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
