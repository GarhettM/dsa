'use strict';

let newTest = require('./repeatedWord.js');

describe('This test will test the functionality of the repeated word function.', () => {
  it('This function should return the first repeated word in a string. If no words repeat the function should respont with "No repeated words!"', () => {

    expect(newTest('Yo mtv wraps whats the haps on the caps')).toStrictEqual('the');

    expect(newTest('This is another string that should return that since I just said it again.')).toStrictEqual('that');

    expect(newTest('This is a sentence that Im using to show stuff off for the greater good of I dont know what')).toStrictEqual('No repeated words!');
  });
});
