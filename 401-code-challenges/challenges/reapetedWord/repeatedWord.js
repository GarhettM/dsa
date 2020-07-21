'use strict';

// Write a function that returns the first word that is repeated in a string.


function repeatedWord(str) {
  const arr = str.split(' ');
  let b = false;

  for (let i = 0; i < arr.length; i++) {
    let a = arr[i]

    for (let j = i + 1; j < arr.length; j++) {

      if (a === arr[j]) {
        b = true;
        return a;
      }
    }
  }
  if (b === false) {
    return 'No repeated words!'
  }
}

module.exports = repeatedWord;