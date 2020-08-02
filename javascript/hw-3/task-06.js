"use strict";
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let totalPrice = 0;
  let searchedProductName;

  for (let product of allProdcuts) {
    const { name } = product;

    if (productName.toLowerCase() === name.toLowerCase()) {
      searchedProductName = product;
      totalPrice = product.price * product.quantity;
    };
  };
  return totalPrice;
};


console.log(calculateTotalPrice(products, "Радар"));

console.log(calculateTotalPrice(products, "Дроид"));
