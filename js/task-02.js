"use strict"

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfItems = ingredients => ingredients.map(element => {
  const item = document.createElement('li')
  item.className = ('item')
  item.textContent = element
  return item
});
const itemList = document.querySelector('#ingredients');
itemList.append(...listOfItems(ingredients));




