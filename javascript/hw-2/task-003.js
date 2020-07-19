const findLongestWord = function(string) {
    let stringSplit = string.split(' ');
    let wordLength = 0;
    let longestWord;

    for(let i = 0; i < stringSplit.length; i += 1){
      wordLength = stringSplit[1].length;

        if(stringSplit[i].length > wordLength){
        longestWord = stringSplit[i];
        return longestWord;
        }
    }
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

