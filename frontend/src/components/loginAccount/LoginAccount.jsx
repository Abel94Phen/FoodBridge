import React from 'react';
import './loginAccountStyles.css';

import FoodBridgeLogo from '../assets/FoodBridge.png'; // Import the image

function LoginAccountPage() {
  return (
    <div className="create-account-page-container">
      <div className="left-panel">
        <img id="organization-logo" src={FoodBridgeLogo} alt="organization-logo" />
        <div className="motto">Bridging the Food Gap</div>
      </div>
      <div className="right-panel">
        <h1>Welcome</h1>
        <div className="google-button">Continue with Google</div>
        <hr className="line-break" />
        <form>
          <div className="input-container">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button className="signup-button">LOG IN</button>
        </form>
        <div className="login-text">
          Don't have an account? <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default LoginAccountPage;
