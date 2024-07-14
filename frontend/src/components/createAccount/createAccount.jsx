import React from 'react';
import './createAccountStyles.css'; // Import the CSS file

import FoodBridgeLogo from '../assets/FoodBridge.png'; // Import the image

function CreateAccountPage() {
  return (
    <div className="create-account-page-container">
      <div className="left-panel">
        <img id="organization-logo" src={FoodBridgeLogo} alt="organization-logo" />
        <div className="motto">Bridging the Food Gap</div>
      </div>
      <div className="right-panel">
        <h1>Create Account</h1>
        <form>
          <div className="input-container">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-container">
            <div className="password-container">
              <div className="input-half">
                <input type="password" id="password" name="password" placeholder="Enter Password" />
              </div>
              <div className="input-half">
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
              </div>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" />
          </div>
          <div className="input-container">
            <label htmlFor="role">Are you a recipient or a donor?</label>
            <select id="role" name="role">
              <option value="recipient">Recipient</option>
              <option value="donor">Donor</option>
            </select>
          </div>
          <button className="signup-button">SIGN UP</button>
        </form>
        <div className="login-text">
          Already have an account? <a href="#">Log In</a>
        </div>
        <button className="google-button">Continue with Google</button>
      </div>
    </div>
  );
}

export default CreateAccountPage;
