'use strict';


// I was looking at interview questions over the weekend after the Stacks and Queues code challenge and the "parentheses" challenge came up and was super fun to solve. I ended up getting my version to work but saw this way and liked it better without using linked lists. Since this challenge is not asking for linked lists, I used the way I learned last weekend. Below is the link to where I got the inspiration to do the challenge this way.
// https://medium.com/@paulrohan/parenthesis-matching-problem-in-javascript-the-hacking-school-hyd-7d7708278911

function multiBracketValidation(input)  {
  let testArr = [];
  let map = {
    '(':')',
    '[':']',
    '{':'}',
  }

  for (let i = 0; i < input.length; i++)  {

    if (input[i] === '[' || input[i] === '(' || input[i] === '{') {
      testArr.push(input[i])
    } else {
      let last = testArr.pop();
      if(input[i] !== map[last]) {
        console.log(input[i] + ' ' + map[last])
        return false
      }
    }   
  }

  if(testArr.length !== 0)  {
    console.log(testArr)
    return false;
  }
  console.log(testArr)
  return true
}

// function useRegex(input)  {
//   const testArr = [];
//   let regex = /\[|\{|\(/g
//   testArr.push(input.match(regex))
//   console.log(input.match(regex))
// }

// useRegex('(({[]}))')
module.exports = multiBracketValidation