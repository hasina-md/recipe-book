import React from 'react';
import Recipe from '../components/Recipe';

// Import the data directly from the JSON file
import recipesData from '../public/recipes.json';

const Recipes = ({ recipes }) => {
  return (
    <div>
      <h1>Recipe Book</h1>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

// Pass the recipes directly as props
export async function getStaticProps() {
  // Fetch recipes from the JSON file
  const recipes = recipesData;

  return {
    props: {
      recipes,
    },
  };
}

export default Recipes;
