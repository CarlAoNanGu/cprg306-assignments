

"use client";

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  };

  useEffect(() => {
    const loadMealIdeas = async () => {
      if (ingredient) {
        const mealsData = await fetchMealIdeas(ingredient);
        setMeals(mealsData);
      }
    };
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="meal-ideas">
      <h2 className="text-xl font-bold mb-4">Meal Ideas for "{ingredient}"</h2>
      <ul className="space-y-4">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="flex items-center space-x-4">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-16 h-16 rounded object-cover"
            />
            <span className="text-lg font-medium">{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
