const itemRef = document.querySelectorAll("li.item");
const items = document.querySelectorAll(".item");

console.log(`В списке ${itemRef.length} категории.`);

Array.prototype.forEach.call(items, (e) => {
  const titleRef = e.querySelector("h2").textContent;
  const itemsLength = e.querySelectorAll("li").length;

  console.log(`Категория: ${titleRef}Количество элементов: ${itemsLength}`);
});
