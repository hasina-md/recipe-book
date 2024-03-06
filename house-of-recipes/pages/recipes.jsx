import React from 'react';
import Recipe from '../components/Recipe';

// Import the data directly from the JSON file
import recipesData from '../public/recipes';

const Recipes = ({ recipes }) => (
  <div>
    <h1>Recipe Book</h1>
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Recipe recipe={recipe} />
        </li>
      ))}
    </ul>
  </div>
);

export async function getStaticProps() {
  const recipes = await import('../public/recipes');

  return {
    props: {
      recipes: recipes.default,
    },
  };
}

export default Recipes;
