'use strict';

const testMerge = require('./merge_sort.js')

describe('This is a test of your local radio station... This is only a test. BRRRRRRRRRRR BRRRRR BRRRRRRRRRRRRRRRRR!', () => {
  it('This test should take in an array and split it into a left half and right half. Once done, it should re merge those two arrays into a single sorted array.', () => {

    let testArr = [8,4,23,42,16,15];

    expect(testMerge.mergeSort(testArr)).toStrictEqual([ 4, 8, 15, 16, 23, 42 ])

  })
})