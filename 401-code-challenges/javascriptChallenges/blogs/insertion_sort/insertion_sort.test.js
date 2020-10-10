'use strict';


const insert = require('./insertion_sort.js')

describe('Testing code challenge: Insertion Sort.', () => {
  it('This test should make the following array in reverse order([8,4,23,42,16,15]).', () => {

    let testArr1 = [8,4,23,42,16,15]
    
    expect(insert(testArr1)).toStrictEqual([4, 8, 15, 16, 23, 42 ]);
  });

  it('This test should make the following array in reverse order([8,4,23,42,16,15]).', () => {

    let testArr1 = [20,18,12,8,5,-2]
    
    expect(insert(testArr1)).toStrictEqual([ -2, 5, 8, 12, 18, 20 ]);
  });

  it('This test should make the following array in reverse order([8,4,23,42,16,15]).', () => {

    let testArr1 = [5,12,7,5,5,7]
    
    expect(insert(testArr1)).toStrictEqual([ 5, 5, 5, 7, 7, 12 ]);
  });
});