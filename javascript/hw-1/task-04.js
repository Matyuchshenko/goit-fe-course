const credits = 23580;
const pricePerDroid = 3000;
let amountDroid = prompt("Укажите количество дроидов котырые вы желаете приобрести.");

let totalPrice = amountDroid * pricePerDroid;
let balanceCredits = credits - totalPrice;

if(amountDroid === null) {
    console.log("Отменено пользователем.");
}else if(totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
}else if(totalPrice <= credits) {
  console.log(`Вы купили "${amountDroid}" дроидов, на счету осталось ${balanceCredits} кредитов.`);
}
