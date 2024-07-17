import React from 'react';
import './UpcomingPickups.css';

const Upcomingpickups = () => {
  const pickups = [
    {
      date: 'July 20, 2024',
      time: '10:00 AM - 12:00 PM',
      location: '[current food establishment location]',
      items: ['Vegetables', 'Fruits', 'Dairy Products'],
    },
    {
      date: 'July 22, 2024',
      time: '9:00 AM - 11:00 AM',
      location: '[current food establishment location]',
      items: ['Fruits', 'Bread'],
    },
    {
      date: 'July 25, 2024',
      time: '11:30 AM - 1:30 PM',
      location: '[current food establishment location]',
      items: ['Dairy Products', 'Canned Goods'],
    },
    {
      date: 'July 27, 2024',
      time: '2:00 PM - 4:00 PM',
      location: '[current food establishment location]',
      items: ['Bread', 'Canned Goods'],
    },
    {
      date: 'July 30, 2024',
      time: '10:30 AM - 12:30 PM',
      location: '[current food establishment location]',
      items: ['Canned Goods', 'Vegetables'],
    },
    {
      date: 'August 2, 2024',
      time: '9:30 AM - 11:30 AM',
      location: '[current food establishment location]',
      items: ['Fruits', 'Bread', 'Dairy Products'],
    },
  ];

  return (
    <div>
      <div className="pickups-list">
        {pickups.map((pickup, index) => (
          <div className="pickup-item" key={index}>
            <h3>{pickup.date}</h3>
            <p>Time: {pickup.time}</p>
            <p>Location: {pickup.location}</p>
            <p>Items: {pickup.items.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcomingpickups;
