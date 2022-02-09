const items = document.querySelectorAll('.item');
console.log(`Number of categories: `, items.length);

items.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}
Elements: ${item.querySelectorAll('li').length}`)
});

//======или так если нужно чтоб количество элементов было числом
// items.forEach(item => {
//   console.log(`Category: ${item.querySelector('h2').textContent}`);
//   console.log(`Elements: `, item.querySelectorAll('li').length);
// });