import React, { useState } from 'react';
import './Inventory.css'; // Import CSS for Inventory component

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [items, setItems] = useState([
    { id: 1, name: 'Rice', category: 'Grains', quantity: 50 },
    { id: 2, name: 'Beans', category: 'Legumes', quantity: 100 },
    { id: 3, name: 'Milk', category: 'Dairy', quantity: 30 },
    // Add more items as needed
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredItems = items.filter(item => 
    (category === 'All' || item.category === category) && 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="inventory-container">
      <h2>Inventory Page</h2>
      <div className="inventory-controls">
        <input 
          type="text" 
          placeholder="Search items..." 
          value={searchTerm} 
          onChange={handleSearchChange}
        />
        <select value={category} onChange={handleCategoryChange}>
          <option value="All">All Categories</option>
          <option value="Grains">Grains</option>
          <option value="Legumes">Legumes</option>
          <option value="Dairy">Dairy</option>
          {/* Add more categories as needed */}
        </select>
        <button className="add-item-button">Add New Item</button>
      </div>
      <div className="inventory-list">
        {filteredItems.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
};

export default Inventory;
