'use strict'

// Generate a range of integers by writing a function that takes in a Start (or min) and increases (using step) until it reaches max variable. Cant go over and must return an array of the values including the min.

// Done in 5 minutes. All tests passed.


function generateRange(min, max, step){
  const final = [];
  function helper(min, max, step) {
    final.push(min);
    if(min >= max - step + 1) {
       return final;
    }
    min += step;
    helper(min, max, step);
  }
  helper(min, max, step);
  return final;
}