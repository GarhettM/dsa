'use strict';

const test = [1, 2, 3, 4, 5, 6]	

function reverseArray(arr) {
  const newArr = [];

  for (i = arr.length - 1; i > arr.length - arr.length -1; i--) {  
    console.log(i);
    newArr.push(arr[i]);
  }

  return newArr;
}

reverseArray(test);