const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

for (elem in ingredients) {
  
  const listElement = document.createElement("li");
  listElement.textContent = ingredients[elem];
  listElement.classList.add("list-element");
 
  const ingredientsRef = document.querySelector('#ingredients');
  ingredientsRef.append(listElement);
}