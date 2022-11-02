const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const ingredientName = (ingredients) => {
  for (let i = 0; i < ingredients.length; i+= 1) {
    const ingredient = document.createElement(`li`);
    ingredient.textContent = ingredients[i];
    ingredient.className = 'item';
    list.append(ingredient);
  }
}

ingredientName(ingredients);