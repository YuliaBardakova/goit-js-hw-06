const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul');

const orIngredientsEl = ingredients => {
  return ingredients.map(ingredient => {
    const titleEl = document.createElement('li');
    titleEl.textContent = ingredient;
    titleEl.classList.add('item');

    return titleEl;
  });
};

const elements = orIngredientsEl(ingredients);
ingredientsEl.append(...elements);

console.log(elements);