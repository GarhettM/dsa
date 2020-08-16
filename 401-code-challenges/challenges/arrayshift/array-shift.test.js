'use strict';

const arrayShift = require('./array-shift.js');


describe('Testing code challenge:', () => {
  it('Should insert value into an array into the middle without built in methods', () => {
    const testArr = [2,4,6,8];
    const testVal = 5;
    const shiftArr = arrayShift(testArr, testVal);

    expect(shiftArr).toStrictEqual([2,4,5,6,8]);

    const testArr2 = [4,8,15,23,42];
    const testVal2 = 17;
    const shiftArr2 = arrayShift(testArr2, testVal2)

    expect(shiftArr2).toStrictEqual([4,8,15, 17, 23,42])
  })
})