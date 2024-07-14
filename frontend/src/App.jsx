import React from 'react';
import Home from './components/dashboard/home/Home';
import Inventory from './components/dashboard/inventory/Inventory';
import DonationStats from './components/dashboard/donationstats/DonationStats';
import Requests from './components/dashboard/requests/Requests';
import Upcomingpickups from './components/dashboard/upcomingpickups/Upcomingpickups';
import Aboutus from './components/dashboard/aboutus/Aboutus';

function App({ selectedMenu }) {
  switch (selectedMenu) {
    case 'Home':
      return <Home />;
    case 'Inventory':
      return <Inventory />;
    case 'Donation Stats':
      return <DonationStats />;
    case 'Requests':
      return <Requests />;
    case 'Upcoming Pick ups':
      return <Upcomingpickups />;
    case 'About Us':
      return <Aboutus />;
    default:
      return null;
  }
}

export default App;
