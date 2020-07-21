'use strict';

// Write a function that returns the first word that is repeated in a string.


function repeatedWord(str) {
  const arr = [];
  let b = false;

  arr.push(str.split(' '))
  for (let i = 0; i < arr[0].length; i++) {
    let a = arr[0][i]

    for (let j = i + 1; j < arr[0].length; j++) {

      if (a === arr[0][j]) {
        b = true;
        return a;
      }
    }
  }
  if (b === false) {
    return 'No repeated words!'
  }
}

console.log(repeatedWord('Yo mtv wraps whats the haps on the caps'))
module.exports = repeatedWord;