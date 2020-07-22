// const friends = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// let namberString = '';

// for (let i = 0; i < friends.length; i+=1) {
//     namberString = (i+1)+'-'+friends[i];
//     console.log (namberString);
// }

// const nambers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// let namberString = '';

// for (let i = 0; i < nambers.length; i+=1) {
//     namberString = (i+1)+'-'+nambers[i];
//     console.log (namberString);
// }

const logItems = function (string) {
  let n = 1;
  for (let i = 0; i < string.length; i += 1) {
    let numberString = `${n+i} - ${string[i]}`;
    console.log(numberString);
    return numberString;
  }

  
};

console.log(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));
