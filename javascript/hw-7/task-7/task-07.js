const input = document.getElementById("font-size-slider");
const span = document.getElementById("text");

function handleInputRange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}

input.addEventListener("input", handleInputRange);
