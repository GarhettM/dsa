'use strict'

const validate = require('./multi-bracket-validation.js');

describe('Write a function that takes in a string of " [ , ] , { , } , ( , ) " The goal is to validate that all the sybolic pairs are closed off syntactically.', () => {
  it('This function should return a true or false statement based on whether the string syntactically closes off the symbols.', () => {


    const testInput1 = '([{[()]}])';
    expect(validate(testInput1)).toStrictEqual(true);

    const testInput2 = '({()[[)]]})'
    expect(validate(testInput2)).toStrictEqual(false);

    const testInput3 = '({[[])})'
    expect(validate(testInput3)).toStrictEqual(false);
  })
})