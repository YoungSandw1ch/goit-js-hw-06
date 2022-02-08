const categoriesListRef = document.querySelector('#categories');
const allCategoriesFromList = categoriesListRef.children;
console.log("~ allCategoriesFromList", allCategoriesFromList)

/*
*=============обычное логирование количества=============
*/

// console.log(`Number of categories: `, NumberOfCategories.length);

/*
*=============мини-функция для вывода количества=========
*/

const getQuantity = values => { 
  return `Number of categories: ${values.length}`;
};
console.log(getQuantity(allCategoriesFromList));

/*
*==мини-функция вывод заголовка и количества детей=======
*/

const getTitleAndChildsQuantitys = categories => {
  return [...categories].forEach(category => {
    category.querySelector('h2').textContent
  })
};
console.log(getTitleAndChildsQuantitys(allCategoriesFromList));