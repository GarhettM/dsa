'use strict';

const HashTable = require('../hashTable/hashTable.js');


function reverseString1(str) {

  let string = '';
  
  for(let i = str.length; i = 0; i--)  {
    let a = str.length -1;
    let b = str.charAt(i);
    a--;
    string = ` ${string}${b}`
  }
  return string;
}

console.log(reverseString1('this'))

