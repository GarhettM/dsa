'use strict';

const arr = [8,4,23,42,16,15];

function sort(arr) {
  arr.sort((a, b) => a-b);
  return arr;
}

function mergeSort (arr) {
  let n = arr.length;
  let left = [];
  let right = [];
  let mid = n/2;

  if (n > 1) {

    for (let i = 0; i < mid; i++ ) {
      
      left.push(arr[i])
    }
    for (let i = mid; i < arr.length; i++)  {

      right.push(arr[i])
    }

  }

  return merge(sort(left), sort(right))

}

function merge(left, right)  {
  const arr = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < left.length || j < right.length)  {

    if(left[i] <= right[j]) {
      arr[k] = left[i]
      i = i+1
    } else {
      arr[k] = right[j]
      j = j+1
    }

    k = k+1

  }

  console.log(arr)
  return arr;
}

mergeSort(arr)

module.exports = {
  sort,
  merge,
  mergeSort,
}