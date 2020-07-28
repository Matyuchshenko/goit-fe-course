const countTotalSalary = function (employees) {
  const values = Object.values(employees);
  console.log(values);
  let totalSalary = 0;
  for (let i = 0; i < values.length; i += 1) {
    totalSalary += values[i];
  }
  return totalSalary;
};

console.log(countTotalSalary({}));

console.log(countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
);

console.log(countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
);
