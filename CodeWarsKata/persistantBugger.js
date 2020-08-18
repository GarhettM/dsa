//08/18/2020


// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number



function persistence(num) {
  let final = 1
  let arr = num.toString().split('')
  if (arr.length === 1) return 0;
  function helper (arr) {
    let temp = 1;
    for (let i = 0; i < arr.length; i++) {
      temp = temp * arr[i]; 
    }
    temp = temp.toString()
    if(temp.length > 1)  {
      final++;
      helper(temp) 
    }
  }
  helper(arr)
  return final;
}