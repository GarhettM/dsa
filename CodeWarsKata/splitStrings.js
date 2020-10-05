// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']



// *** All tests passed! ***

function solution(str){
  const final = [];

  for (let i = 0; i < str.length; i++) {
      
    if(i === str.length - 1 && str.length % 2 !== 0) {
      final.push(`${str[str.length - 1]}_`)
      break;
    } 
    if(i % 2 !== 0){
      continue;
    } else {
      final.push(`${str[i]}${str[i+1]}`)
    } 
  }
  return final;
}