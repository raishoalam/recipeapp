// src/pages/RecipePage.js
import React, { useState, useEffect } from 'react';
import RecipeCard from './components/RecipeCard';
import SearchBar from './components/SearchBar';
import FilterSidebar from './components/FilterSidebar';
import SortingOptions from './components/SortingOptions';
import './App.css';

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState('date-newest');

  useEffect(() => {
    const data = [
      { name: "Spaghetti Carbonara", chef: "Chef Mario", totalRatings: 500, avgRating: 4.8, uploadedOn: "2024-01-15", mealType: "Dinner", dishType: "Pasta", testKitchenApproved: true, contestWinner: false, featured: false, description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg" },
      { name: "Chicken Alfredo", chef: "Chef Anna", totalRatings: 300, avgRating: 4.6, uploadedOn: "2024-02-10", mealType: "Dinner", dishType: "Pasta", testKitchenApproved: false, contestWinner: false, featured: true, description: "Creamy chicken alfredo pasta with garlic and parmesan.", imgUrl: "https://i.pinimg.com/564x/a0/32/d5/a032d51b938c1fba6ef63a2d0972ab27.jpg" },
      { name: "Vegetarian Lasagna", chef: "Chef Emma", totalRatings: 700, avgRating: 4.9, uploadedOn: "2024-01-20", mealType: "Dinner", dishType: "Pasta", testKitchenApproved: true, contestWinner: true, featured: true, description: "Layers of pasta with ricotta cheese, spinach, and marinara sauce.", imgUrl: "https://i.pinimg.com/564x/f2/94/62/f29462a059defe2310e05b72c88b2819.jpg" },
      { name: "Beef Tacos", chef: "Chef John", totalRatings: 1200, avgRating: 4.5, uploadedOn: "2024-03-01", mealType: "Dinner", dishType: "Mexican", testKitchenApproved: false, contestWinner: false, featured: false, description: "Spicy ground beef with lettuce, cheese, and salsa wrapped in a crunchy taco shell.", imgUrl: "https://i.pinimg.com/564x/ea/68/4a/ea684ad960052a8039a177fd1c02854f.jpg" },
      { name: "Shrimp Tacos", chef: "Chef Maya", totalRatings: 1100, avgRating: 4.7, uploadedOn: "2024-03-05", mealType: "Dinner", dishType: "Mexican", testKitchenApproved: false, contestWinner: true, featured: false, description: "Grilled shrimp topped with slaw and avocado in a soft taco shell.", imgUrl: "https://i.pinimg.com/564x/0a/d6/a0/0ad6a0ecf2d20974d9a40dbe79b75f59.jpg" },
      { name: "Pancakes", chef: "Chef Lucy", totalRatings: 900, avgRating: 4.8, uploadedOn: "2024-02-28", mealType: "Breakfast", dishType: "Dessert", testKitchenApproved: true, contestWinner: false, featured: true, description: "Fluffy pancakes served with maple syrup and fresh berries.", imgUrl: "https://i.pinimg.com/564x/a9/7b/da/a97bda9d5d2704ef826f1f49d004625f.jpg" },
      { name: "Blueberry Muffins", chef: "Chef Daisy", totalRatings: 600, avgRating: 4.4, uploadedOn: "2024-03-02", mealType: "Breakfast", dishType: "Dessert", testKitchenApproved: false, contestWinner: false, featured: true, description: "Freshly baked muffins with sweet blueberries and a light crumb.", imgUrl: "https://i.pinimg.com/564x/88/7f/a4/887fa46ab88d4d337f5f70e1eb4e00f7.jpg" },
      { name: "Grilled Cheese Sandwich", chef: "Chef Olivia", totalRatings: 450, avgRating: 4.3, uploadedOn: "2024-02-25", mealType: "Lunch", dishType: "Sandwich", testKitchenApproved: true, contestWinner: false, featured: false, description: "Toasty grilled sandwich filled with melted cheese.", imgUrl: "https://i.pinimg.com/564x/56/00/5a/56005a0e6178d1b2803380d8b83917c6.jpg" },
      { name: "BBQ Chicken Sandwich", chef: "Chef Jackson", totalRatings: 1500, avgRating: 5.0, uploadedOn: "2024-01-30", mealType: "Lunch", dishType: "Sandwich", testKitchenApproved: true, contestWinner: true, featured: true, description: "Tender pulled chicken with barbecue sauce on a toasted bun.", imgUrl: "https://i.pinimg.com/564x/12/47/6d/12476d8f7f52f54da788d84bc287b53c.jpg" },
      { name: "Avocado Toast", chef: "Chef Chloe", totalRatings: 200, avgRating: 4.1, uploadedOn: "2024-02-18", mealType: "Breakfast", dishType: "Vegetarian", testKitchenApproved: false, contestWinner: false, featured: false, description: "Creamy mashed avocado on toasted bread, topped with a poached egg.", imgUrl: "https://i.pinimg.com/564x/4e/1e/68/4e1e689e6e7f74010b080923bf830831.jpg" },
      { name: "Caesar Salad", chef: "Chef Ryan", totalRatings: 800, avgRating: 4.6, uploadedOn: "2024-01-10", mealType: "Lunch", dishType: "Salad", testKitchenApproved: true, contestWinner: false, featured: false, description: "Crisp lettuce, creamy dressing, croutons, and parmesan.", imgUrl: "https://i.pinimg.com/564x/94/f5/4a/94f54a9b30da89899360b1d1ec5d16ed.jpg" },
      { name: "Chicken Salad", chef: "Chef Noah", totalRatings: 950, avgRating: 4.7, uploadedOn: "2024-03-07", mealType: "Lunch", dishType: "Salad", testKitchenApproved: true, contestWinner: false, featured: true, description: "Grilled chicken with a fresh veggie salad and light dressing.", imgUrl: "https://i.pinimg.com/564x/33/8f/ea/338fea7c1d7d1e3b12fe9c56ef70a563.jpg" },
      // Add more recipes until you have 50
      { name: "Beef Wellington", chef: "Chef Richard", totalRatings: 1100, avgRating: 4.9, uploadedOn: "2024-02-10", mealType: "Dinner", dishType: "Beef", testKitchenApproved: true, contestWinner: true, featured: true, description: "Tender beef fillet wrapped in puff pastry and baked.", imgUrl: "https://i.pinimg.com/564x/96/3a/1a/963a1a3ac2e89a45f6a8b3033d1c75ab.jpg" },
      { name: "Peking Duck", chef: "Chef Li", totalRatings: 650, avgRating: 4.4, uploadedOn: "2024-02-12", mealType: "Dinner", dishType: "Chinese", testKitchenApproved: false, contestWinner: false, featured: false, description: "Crispy duck with a sweet and savory sauce.", imgUrl: "https://i.pinimg.com/564x/23/c0/02/23c0020e7e392cb604d2075e191c5613.jpg" },
      { name: "Mushroom Risotto", chef: "Chef Isabella", totalRatings: 600, avgRating: 4.6, uploadedOn: "2024-02-18", mealType: "Dinner", dishType: "Vegetarian", testKitchenApproved: true, contestWinner: false, featured: true, description: "Creamy rice with earthy mushrooms and parmesan.", imgUrl: "https://i.pinimg.com/564x/6e/c8/3e/6ec83e06f81cbbd3a148b2f4f8424777.jpg" },
      { name: "Ratatouille", chef: "Chef Pierre", totalRatings: 500, avgRating: 4.3, uploadedOn: "2024-01-18", mealType: "Dinner", dishType: "Vegetarian", testKitchenApproved: false, contestWinner: false, featured: true, description: "French vegetable stew with tomatoes, zucchini, and eggplant.", imgUrl: "https://i.pinimg.com/564x/5a/d2/f7/5ad2f7d92a47f7d108c28f819c2a4a58.jpg" },
      { name: "Salmon Sushi", chef: "Chef Yuki", totalRatings: 750, avgRating: 4.8, uploadedOn: "2024-02-25", mealType: "Dinner", dishType: "Sushi", testKitchenApproved: true, contestWinner: false, featured: true, description: "Fresh salmon on vinegared rice with seaweed.", imgUrl: "https://i.pinimg.com/564x/37/90/cb/3790cb1c4b39a2b89f256ac33d68b5d8.jpg" },
      // Continue adding more recipes until you have 50
    ];

    setRecipes(data);
    setFilteredRecipes(data);
  }, []);

  useEffect(() => {
    let filtered = recipes;

    if (searchQuery) {
      filtered = filtered.filter(
        (recipe) =>
          recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          recipe.chef.toLowerCase().includes(searchQuery.toLowerCase()) ||
          recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filters.mealType) {
      filtered = filtered.filter((recipe) => recipe.mealType === filters.mealType);
    }
    if (filters.dishType) {
      filtered = filtered.filter((recipe) => recipe.dishType === filters.dishType);
    }
    if (filters.attributes) {
      filters.attributes.forEach((attribute) => {
        filtered = filtered.filter((recipe) => recipe[attribute] === true);
      });
    }

    if (sortOption === 'date-newest') {
      filtered.sort((a, b) => new Date(b.uploadedOn) - new Date(a.uploadedOn));
    } else if (sortOption === 'date-oldest') {
      filtered.sort((a, b) => new Date(a.uploadedOn) - new Date(b.uploadedOn));
    } else if (sortOption === 'rating-highest') {
      filtered.sort((a, b) => b.avgRating - a.avgRating);
    } else if (sortOption === 'rating-lowest') {
      filtered.sort((a, b) => a.avgRating - b.avgRating);
    }

    setFilteredRecipes(filtered);
  }, [recipes, searchQuery, filters, sortOption]);

  return (
    <div className="recipe-page">
      <SearchBar onSearch={setSearchQuery} />
      <FilterSidebar onFilter={setFilters} />
      <SortingOptions onSort={setSortOption} />

      <div className="recipe-cards-container">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.name} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipePage;
