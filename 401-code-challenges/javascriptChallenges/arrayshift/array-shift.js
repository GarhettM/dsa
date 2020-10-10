'use strict';



function insertMiddleVal(arr, val)  {
  let newArr = [];
  const mid = Math.ceil(arr.length/2)

  for (let i = 0; i < mid; i++)  {
    newArr[i] = arr[i];
  }

  newArr[mid] = val

  for (let i = mid; i < arr.length; i++)  {
    newArr[i + 1] = arr[i];
  }
  
  console.log(newArr)

  return newArr;
} 
 
 
 
 
 



module.exports = insertMiddleVal;