const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = ingredients => ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredient;
  return item;
})
  
const ul = document.querySelector('#ingredients');
ul.append(...listOfIngredients(ingredients))