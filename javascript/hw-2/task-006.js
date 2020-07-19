
let input;

let total = 0;

const numbers = [];
let n = 1;
for (let i = 0; i < n+i; i+=1) {
    let input = prompt('Введите число');
    if (input === null) {
      console.log("Отменено пользователем");
      break;
    }
    
    input = Number(input);
    const notANumber = Number.isNaN(input);
    
    if (notANumber) {
      alert("Было введено не число, попробуйте ещё раз.");
      continue;
    }
    numbers.push(input);

  total += input;
}
console.log(`Общая сумма чисел равна ${total}`);
console.log(numbers);

