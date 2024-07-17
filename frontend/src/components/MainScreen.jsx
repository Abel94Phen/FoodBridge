import React, { useState } from 'react';
import './mainScreenStyles.css';
import FoodBridgeLogo from './assets/FoodBridge Green Circle Logo.png';
import App from '../App';

function Main() {
  const [selectedMenu, setSelectedMenu] = useState('Home');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="main-page-container">
      <div className="left-panel">
        <div className="top-half">
          <img id="organization-logo" src={FoodBridgeLogo} alt="organization-logo" />
        </div>
        <div className="bottom-half">
          <div className="menu-options">
            <div
              className={`menu-item ${selectedMenu === 'Home' ? 'active' : ''}`}
              onClick={() => handleMenuClick('Home')}
            >
              Home
            </div>
            <div
              className={`menu-item ${selectedMenu === 'Inventory' ? 'active' : ''}`}
              onClick={() => handleMenuClick('Inventory')}
            >
              Inventory
            </div>
            <div
              className={`menu-item ${selectedMenu === 'Donation Stats' ? 'active' : ''}`}
              onClick={() => handleMenuClick('Donation Stats')}
            >
              Donation Stats
            </div>
            <div
              className={`menu-item ${selectedMenu === 'Requests' ? 'active' : ''}`}
              onClick={() => handleMenuClick('Requests')}
            >
              Requests
            </div>
            <div
              className={`menu-item ${selectedMenu === 'Upcoming Pick ups' ? 'active' : ''}`}
              onClick={() => handleMenuClick('Upcoming Pick ups')}
            >
              Upcoming Pick ups
            </div>
            <div
              className={`menu-item ${selectedMenu === 'About Us' ? 'active' : ''}`}
              onClick={() => handleMenuClick('About Us')}
            >
              About Us
            </div>
          </div>
        </div>
      </div>
      <div className="right-panel">
        <div className="right-panel-header">
          <h1>{selectedMenu}</h1>
        </div>
        <div className="right-panel-content">
          <App selectedMenu={selectedMenu} />
        </div>
      </div>
    </div>
  );
}

export default Main;
