const input = document.querySelector("#name-input");

input.addEventListener("keyup", (el) => {
  const output = document.querySelector("#name-output");
  output.textContent = el.target.value;
});
