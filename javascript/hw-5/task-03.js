"use strict";
const Storage = {
  items: [],

  Storage.prototype.getInfo = function (itemName) {
    add(itemName) {
        this.items.push(itemName);
      },
      remove(itemName) {
        this.items = this.items.filter((item) => item !== itemName);
      },
  };

  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter((item) => item !== itemName);
  },
};

const storage = new Storage (
    items: [
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

// console.table(Storage.items);

// const invokeStorageAction = function (itemName, action) {
//   action(itemName);
// };

// invokeStorageAction("Дроид", Storage.add.bind(Storage));
// console.table(Storage.items);

// invokeStorageAction("Пролонгер", Storage.remove.bind(Storage));
// console.table(Storage.items);



// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem("Дроид");
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
