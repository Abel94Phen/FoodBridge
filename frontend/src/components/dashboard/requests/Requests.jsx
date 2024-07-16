import React, { useState } from 'react';
import './Requests.css';

const Requests = () => {
  const [expandedRequest, setExpandedRequest] = useState(null);

  const handleToggleExpand = (index) => {
    setExpandedRequest(expandedRequest === index ? null : index);
  };

  const handleApprove = (index) => {
    // Logic for approving the request (you can implement this as needed)
    console.log(`Request at index ${index} approved!`);
  };

  const requests = [
    {
      organization: 'Hope Community Center',
      foodType: 'Vegetables',
      quantity: '100 kg',
      letter: 'We are requesting vegetables due to a recent shortage in our area caused by unexpected weather conditions. Our community relies heavily on fresh produce, and the shortage has significantly impacted our ability to provide nutritious meals. The vegetables will help us continue to support families in need and ensure that children receive the vitamins and minerals essential for their growth and development.',
    },
    {
      organization: 'Bright Future Orphanage',
      foodType: 'Fruits',
      quantity: '50 kg',
      letter: 'Our organization helps underprivileged children, and we need fruits to ensure they receive a balanced diet. Recently, we have experienced an increase in the number of children we serve, which has put a strain on our resources. By providing us with fruits, you will help us maintain the health and well-being of these children, supporting their physical and mental development.',
    },
    {
      organization: 'Elder Care Foundation',
      foodType: 'Dairy Products',
      quantity: '200 liters',
      letter: 'We are requesting dairy products to support our meal programs for the elderly. Many of our beneficiaries are on fixed incomes and struggle to afford nutritious food. Dairy products like milk, cheese, and yogurt are crucial for their diet, providing them with essential calcium and protein. Your donation will help us continue offering wholesome meals to our elderly community members, ensuring they remain healthy and strong.',
    },
    {
      organization: 'Bread of Life Shelter',
      foodType: 'Bread',
      quantity: '300 loaves',
      letter: 'Bread is a staple food in our community, and we are currently facing a shortage. Many families depend on us for their daily bread, especially during these tough economic times. By donating bread, you will help us provide a reliable source of food for those who are struggling to make ends meet. Your generosity will make a significant difference in their lives.',
    },
    {
      organization: 'Helping Hands Food Pantry',
      foodType: 'Canned Goods',
      quantity: '500 cans',
      letter: 'Our food pantry is in urgent need of canned goods. These non-perishable items are essential for ensuring that we can provide meals to families throughout the year, especially during times of crisis. Canned vegetables, beans, and soups are particularly needed. Your donation will help us keep our shelves stocked and ready to serve those in need at any time.',
    },
  ];

  return (
    <div className="requests-container">
      <h2>Current Requests</h2>

      <div className="requests-list">
        {requests.map((request, index) => (
          <div className="request-item" key={index}>
            <div className="request-summary">
              <button className="toggle-button" onClick={() => handleToggleExpand(index)}>
                {expandedRequest === index ? '▼' : '▶'}
              </button>
              <div className="request-details">
                <h3>{request.organization}</h3>
                <p>Food Type: {request.foodType}</p>
                <p>Quantity: {request.quantity}</p>
              </div>
              {/* Approve Button */}
              <button className="approve-button" onClick={() => handleApprove(index)}>Approve</button>
            </div>
            {expandedRequest === index && (
              <div className="request-description">
                <p>{request.letter}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
