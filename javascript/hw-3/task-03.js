"use strict";
const findBestEmployee = function (employees) {
  let max = 0;
  let maxName = null;

  for (const [name, employee] of Object.entries(employees)) {
    if (max < employee) {
      max = employee;
      maxName = name;
    }
  }

  return maxName;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
