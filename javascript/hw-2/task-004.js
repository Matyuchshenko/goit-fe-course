// const formatString = function (string) {
//   let stringCut;
//   let stringSplit = string.split("");

//   if (stringSplit.length <= 40) {
//     stringCut = string;
//   } else {
//     let characterString = stringSplit.splice(39, 0, "...");
//     let firstPartString = stringSplit.splice(0, 40);

//     stringCut = firstPartString.join("");
//   }

//   return stringCut;

// };

const formatString = function (string) {
  let stringCut;

  if (string.length <= 40) {
    stringCut = string;
    return stringCut;    
  } else {
    let firstPartString = string.slice(0, 41);
    let stringCut = `${firstPartString}...`;
    return stringCut;
  };
  
};

 console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка
