const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = ingredients.map(ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;
  ingredientRef.classList.add('item');
  console.log(ingredientRef);
  return ingredientRef;
})
  
const listRef = document.querySelector('#ingredients');
  listRef.append(...ingredientsRef);