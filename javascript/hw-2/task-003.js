const findLongestWord = function (string) {
   let stringSplit = string.split(" ");

  console.log(stringSplit);

  let wordLength = 0;
  let longestWord = null;

  for (let i = 0; i < stringSplit.length; i += 1) {
    
    if (stringSplit[i].length > wordLength) {
      wordLength = stringSplit[i].length;
      longestWord = stringSplit[i];
      
    };
  };
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a Roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
