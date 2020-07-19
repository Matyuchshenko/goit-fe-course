const formatString = function (string) {
  let stringCut;
  let stringSplit = string.split("");

  if (stringSplit.length <= 40) {
    stringCut = string;
  } else {
    let characterString = stringSplit.splice(39, 0, "...");
    let firstPartString = stringSplit.splice(0, 40);

    stringCut = firstPartString.join("");
  }
  
  return stringCut;
  
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка
