'use strict'

const linkedList = require('./11-merge.js');



const firstLinkedList = new linkedList.LinkedList();
const secondLinkedList = new linkedList.LinkedList();
const mergeList = new linkedList.LinkedList();

firstLinkedList.insert('2')
firstLinkedList.insert('3')
firstLinkedList.insert('1')

secondLinkedList.insert('4')
secondLinkedList.insert('9')
secondLinkedList.insert('5')

// Write a function called mergeLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.



describe('Testing code challenge: Linked list class 07.', () => {
  it('Should zipper two linkedlists together by taking in 3 linked list variables.', () => {

    
    expect(linkedList.mergeList(firstLinkedList, secondLinkedList, mergeList).toString()).toStrictEqual(` { 4 }  { 2 }  { 9 }  { 3 }  { 5 }  { 1 } `);

  })
})