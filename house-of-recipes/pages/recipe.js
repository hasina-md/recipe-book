import React from 'react';
import Recipe from '../components/Recipe';
import recipesData from '../public/recipes.json';

const Recipes = ({ recipes}) => {
  return (
    <div>
      <h1>Recipe Book</h1>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

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
