// const message = prompt("Введите надпись гравировки");
// const price = prompt("Стоимость одного слова");

// let wordsArray = message.split(" ");
// let pricePerWord = price * wordsArray.length;

// console.log(message + " " + pricePerWord);

const calculateEngravingPrice = function(message, pricePerWord) {
    let wordsArray = message.split(" ");
  
    return pricePerWord * wordsArray.length
};

console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); //80
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  ); // 160
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  ); // 240
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  ); // 120