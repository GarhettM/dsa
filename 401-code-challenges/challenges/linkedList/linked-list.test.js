'use strict';

const linkedList = require('./linked-list.js');

let testList = new linkedList.LinkedList
testList.insert('1')
testList.insert('2')
testList.insert('3')
testList.insert('4')

let testList2 = new linkedList.LinkedList
testList2.insert('1')
testList2.insert('2')
testList2.insert('3')
testList2.insert('4')

xdescribe('Testing code challenge: Linked list class 06.', () => {
  it('Should add a node at the end of the list using the append method.', () => {

    const testVal = '5';
    testList.append(testVal)

    expect(testList.toString()).toStrictEqual(` { 5 }  { 4 }  { 3 }  { 2 }  { 1 } `);

    const testVal2 = '12';
    testList2.append(testVal2);
    expect(testList2.toString()).toStrictEqual(` { 12 }  { 4 }  { 3 }  { 2 }  { 1 } `)

  })

  it('Should insert a node (newVal) before the "value" provided the insertBefore method.', () => {

    const testVal = '3';
    const testNewVal = 'a'
    testList.insertBefore(testVal, testNewVal)

    expect(testList.toString()).toStrictEqual(` { 5 }  { 4 }  { a }  { 3 }  { 2 }  { 1 } `);

    const testVal2 = '2';
    const testNewVal2 = '3464257457'
    testList2.insertBefore(testVal2, testNewVal2);
    expect(testList2.toString()).toStrictEqual(` { 12 }  { 4 }  { 3 }  { 3464257457 }  { 2 }  { 1 } `)

  })

  it('Should insert a node (newVal) after the "value" provided the insertAfter method.', () => {

    const testVal = '4';
    const testNewVal = 'b'
    testList.insertAfter(testVal, testNewVal)

    expect(testList.toString()).toStrictEqual(` { 5 }  { 4 }  { b }  { a }  { 3 }  { 2 }  { 1 } `);

    const testVal2 = '2';
    const testNewVal2 = 'THIS IS HERE NOW'
    testList2.insertAfter(testVal2, testNewVal2);
    expect(testList2.toString()).toStrictEqual(` { 12 }  { 4 }  { 3 }  { 3464257457 }  { 2 }  { THIS IS HERE NOW }  { 1 } `)

  })
})

// =============================================================================

let nthTestList = new linkedList.LinkedList
nthTestList.insert('2')
nthTestList.insert('8')
nthTestList.insert('3')
nthTestList.insert('1')

describe('Test to retrieve the value of the nth node from the end.', () => {
  it('Test to fond value of the nth node from the end.', () => {

    const testNth = 2;
    const testNth2 = 0;
    expect(nthTestList.searchNode(testNth).toString()).toStrictEqual('3')

    expect(nthTestList.searchNode(testNth2).toString()).toStrictEqual('2')
  })
})