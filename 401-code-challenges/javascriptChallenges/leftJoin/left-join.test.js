'use strict';

const HashFile = require('../hashTable/hashTable.js')
const leftJoin = require('./left-join.js')

const left = new HashFile.HashMap(10)
const right = new HashFile.HashMap(10)

left.add("fond", "enamored")
left.add("wrath", "anger")
left.add("diligent", "employed")
left.add("guide", "usher")
left.add("Seahawks", "BEST TEAM EVER")
left.add("bargain", "pact")
left.add("shitty", "terrible")
left.add("asshole", "Garhett Morgan")

right.add("fond", "shmammered")
right.add("wrath", "ice cream")
right.add("diligent", "lazy")
right.add("flow", "jam")
right.add("guide", "lost in the sauce")
right.add("bargain", "ripped-off")
right.add("shitty", "perfect")
right.add("asshole", "Garhett Morgan")


describe('This test will test your hashmapping skills.', () => {

  it(
    'Write a function that LEFT JOINs two hashmaps into a single data structure. The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values. The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values. Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic. LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row. The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic. Avoid utilizing any of the library methods available to your language.', () => {


      expect(leftJoin(left, right)).toStrictEqual(
        [
          ['fond', 'enamored', 'shmammered'],
          ['wrath', 'anger', 'ice cream'],
          ['diligent', 'employed', 'lazy'],
          ['guide', 'usher', 'lost in the sauce'],
          ['Seahawks', 'BEST TEAM EVER', null],
          ['bargain', 'pact', 'ripped-off'],
          ['shitty', 'terrible', 'perfect'],
          ['asshole', 'Garhett Morgan', 'Garhett Morgan']
        ])
    })
})