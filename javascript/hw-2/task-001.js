const logItems = function (string) {
  for (let i = 0; i < string.length; i += 1) {
    let numberString = `${1 + i} - ${string[i]}`;
    console.log(numberString);
  }
};

console.log(logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));

console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));
