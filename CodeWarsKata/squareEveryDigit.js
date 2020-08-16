// 08/15/2020

// CodeWars ID: garhettM

// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  let final = '';
  let numStr = num.toString();
  
  for (let i = 0; i < numStr.length; i++) {
    let cat = numStr[i] * numStr[i];
    final = `${final}${cat}`
  }
  final = parseInt(final)
  return final
}