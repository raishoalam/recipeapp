// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="app-title">Recipe Contest</h1>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#recipes">Recipes</a></li>
            <li><a href="#submit">Submit Recipe</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
