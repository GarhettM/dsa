'use strict';

const arr = [20,18,12,8,5,-2]

function insertionSort(arr) {

  for(let i = 0; i < arr.length; i++) {
    let j = i -1;
    let temp = arr[i]

    while(j >= 0 && temp < arr[j])  {
      arr[j + 1] = arr[j]
      j = j-1;
    }

    arr[j + 1] = temp
  }
  return arr;
}

console.log(insertionSort(arr))

module.exports = insertionSort;