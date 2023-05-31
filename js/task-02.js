const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngridients = document.querySelector('ul')

const newIngredientsList = ingredients.map(name => {
  const newElementLi = document.createElement('li')
  newElementLi.textContent = name;
  newElementLi.classList.add("item")
  
  return newElementLi
  })
  
  allIngridients.append(...newIngredientsList)