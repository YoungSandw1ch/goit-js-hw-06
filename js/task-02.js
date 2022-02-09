const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');

const markup = ingredients.map(ingredient => {
  const items = document.createElement('li');
  items.textContent = ingredient;
  items.classList.add('item');
  return items;
});

listRef.append(...markup);

//==================innerHTML=====================

// const markup = ingredients.map(ingredient =>
//   `<li class="item">${ingredient}</li>`).join('');

// listRef.innerHTML = markup;
