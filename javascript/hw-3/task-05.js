"use strict";
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

function getAllPropValues(arr, prop) {
  const values = [];

  for (const product of arr) {
    let value = product[prop];

    if (value != undefined) {
      values.push(value);
    }
  }

  return values;
}

console.log(getAllPropValues(products, "name"));

console.log(getAllPropValues(products, 'quantity'));

console.log(getAllPropValues(products, 'category'));
