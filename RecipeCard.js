// src/components/RecipeCard.js
import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.imgUrl} alt={recipe.name} className="recipe-card-img" />
      <h3 className="recipe-card-title">{recipe.name}</h3>
      <p className="recipe-card-chef">Chef: {recipe.chef}</p>
      <p className="recipe-card-rating">Rating: {recipe.avgRating}</p>
      <p className="recipe-card-description">{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
