const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const lastItem = document.createElement("li");
  lastItem.classList.add("item");
  lastItem.textContent = ingredient;
  list.append(lastItem);
}
