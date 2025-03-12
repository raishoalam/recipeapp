// src/components/FilterSidebar.js
import React, { useState } from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    mealType: '',
    dishType: '',
    attributes: [],
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFilters((prev) => {
        const newAttributes = checked
          ? [...prev.attributes, value]
          : prev.attributes.filter((item) => item !== value);
        return { ...prev, attributes: newAttributes };
      });
    } else {
      setFilters({ ...filters, [name]: value });
    }
    onFilter(filters);
  };

  return (
    <div className="filter-sidebar">
      <h4>Filters</h4>
      <div className="filter-option">
        <label>Meal Type:</label>
        <select name="mealType" onChange={handleFilterChange}>
          <option value="">Select Meal Type</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
          <option value="Dessert">Dessert</option>
          <option value="Breakfast">Breakfast</option>
        </select>
      </div>
      <div className="filter-option">
        <label>Dish Type:</label>
        <select name="dishType" onChange={handleFilterChange}>
          <option value="">Select Dish Type</option>
          <option value="Pasta">Pasta</option>
          <option value="Pizza">Pizza</option>
          <option value="Seafood">Seafood</option>
          <option value="Soup">Soup</option>
          <option value="Mexican">Mexican</option>
          <option value="Smoothie">Smoothie</option>
        </select>
      </div>
      <div className="filter-option">
        <label>Attributes:</label>
        <label>
          <input
            type="checkbox"
            value="contestWinner"
            onChange={handleFilterChange}
          />
          Contest Winner
        </label>
        <label>
          <input
            type="checkbox"
            value="featured"
            onChange={handleFilterChange}
          />
          Featured
        </label>
        <label>
          <input
            type="checkbox"
            value="testKitchenApproved"
            onChange={handleFilterChange}
          />
          Test Kitchen Approved
        </label>
      </div>
    </div>
  );
};

export default FilterSidebar;
