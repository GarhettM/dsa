// 08/15/2020

// CodeWars ID: garhettM

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
  word = word.toLowerCase();
  let arr = word.split('')
  let final = '';
  
  for (let i = 0; i < arr.length; i++) {
    let toggle = false;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }
      if(arr[i] === arr[j]) {
        toggle = true
      }
    }
    if(!toggle) {
      final = `${final}(`
    } else {
      final = `${final})`
    }
  }
  console.log(final)
  return final
}