// src/components/SortingOptions.js
import React from 'react';
import './SortingOptions.css';

const SortingOptions = ({ onSort }) => {
  const handleSortChange = (e) => {
    const value = e.target.value;
    onSort(value);
  };

  return (
    <div className="sorting-options">
      <label>Sort by:</label>
      <select onChange={handleSortChange}>
        <option value="date-newest">Newest</option>
        <option value="date-oldest">Oldest</option>
        <option value="rating-highest">Highest Rating</option>
        <option value="rating-lowest">Lowest Rating</option>
      </select>
    </div>
  );
};

export default SortingOptions;
