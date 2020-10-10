// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below. It should return the resulting array of integers.

// rotLeft has the following parameter(s):

// An array of integers .
// An integer , the number of rotations.


function rotLeft(a, d) {
  const arr = [];
  for (let i = 0; i < a.length; i++) {
      let newIndex = (i + (a.length - d)) % a.length;
      arr[newIndex] = a[i];
  }
  return arr;
}