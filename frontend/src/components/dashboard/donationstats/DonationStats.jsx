import React from 'react';
import './DonationStats.css';

const DonationStats = () => {
  const totalDonations = 5000; // Example data
  const monthlyTrend = [500, 450, 520, 480, 530, 600, 580, 610, 590, 650, 620, 670]; // Example data
  const topDonors = [
    { name: 'Donor A', amount: 1500 },
    { name: 'Donor B', amount: 1200 },
    { name: 'Donor C', amount: 1000 },
  ]; // Example data
  const impactMetrics = {
    mealsProvided: 10000,
    familiesHelped: 200,
    foodWasteReduced: '2 tons',
  }; // Example data

  return (
    <div className="donation-stats-container">
      <h2>Donation Statistics</h2>
      
      <div className="stats-summary">
        <div className="stat-item">
          <h3>Total Donations</h3>
          <p>{totalDonations} kg</p>
        </div>
        <div className="stat-item">
          <h3>Meals Provided</h3>
          <p>{impactMetrics.mealsProvided}</p>
        </div>
        <div className="stat-item">
          <h3>Families Helped</h3>
          <p>{impactMetrics.familiesHelped}</p>
        </div>
        <div className="stat-item">
          <h3>Food Waste Reduced</h3>
          <p>{impactMetrics.foodWasteReduced}</p>
        </div>
      </div>

      <div className="monthly-trend">
        <h3>Monthly Donation Trend</h3>
        <div className="trend-chart">
          {monthlyTrend.map((value, index) => (
            <div key={index} className="bar" style={{ height: `${value / 10}%` }}>
              <span>{value} kg</span>
            </div>
          ))}
        </div>
      </div>

      <div className="top-donors">
        <h3>Top Donors</h3>
        <ul>
          {topDonors.map((donor, index) => (
            <li key={index}>
              {donor.name}: {donor.amount} kg
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DonationStats;
