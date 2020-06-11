'use strict';

const arrayBinary = require('./array-binary-search.js');

describe('Testing code challenge:', () => {
  it('The return should equal the location in the array.', () => {
    const testArr = [4,8,15,16,23,42];
    const testVal = 15;
    const binaryArr = arrayBinary(testArr, testVal);
    expect(binaryArr).toStrictEqual(2);
  });
  
  it('The return should equal the location in the array.', () => {
    const testArr2 = [11,22,33,44,55,66,77];
    const testVal2 = 90;
    const binaryArr2 = arrayBinary(testArr2, testVal2);
    expect(binaryArr2).toStrictEqual(-1);
  });
});