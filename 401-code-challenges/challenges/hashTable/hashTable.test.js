'use strict';

const hash = require('./hashTable.js');


let newHash = new hash.HashMap(5)

newHash.add('new', 'test');
newHash.add('new', 'yourself');
newHash.add('old', 'you are awesome')
newHash.add('test', 'me please')
newHash.add('foo', 'manchu')

describe('THis is a test of your hashing skills, If you fail, you suck.', () => {
  it('this first test should add a hash to the hashmap. The contains method I wrote will return a boolean if the add method was good to go.', () => {
    
    newHash.add('test1', 'value1')
    expect(newHash.contains('test1')).toBe(true);

  })

  it('this test should return the value of the key and NOT the values of everything inside the same bucket', () => {

    expect(newHash.get('new')).toStrictEqual([ 'test', 'yourself' ])
  })
})