'use strict';

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

// *** All tests passed! ***

function anagrams(word, words) {
  const mainWord = word.split("").sort();
  console.log(mainWord)
  const final = [];
  for (let i = 0; i < words.length; i++) {
    if(mainWord.length !== words[i].length) {
      continue;
    }
    let temp = words[i].split("").sort();
    console.log(mainWord, temp)
    if(JSON.stringify(mainWord) === JSON.stringify(temp)) {
      final.push(words[i]);
    }
  }
  console.log(final)
  return final;
}
