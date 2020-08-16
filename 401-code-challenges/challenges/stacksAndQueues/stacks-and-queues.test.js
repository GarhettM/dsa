'use strict';

const test = require('./stacks-and-queues.js');

let testStack = new test.Stack();
let testQueue = new test.Queue();

describe('The following tests should flawlessly execute methods from a created class called Stack', () => {
  it('Should successfully push a value onto a stack.', () => {
    
    const testVal = 1;
    testStack.push(testVal);
    expect(testStack.onlyValues()).toStrictEqual(` { 1 } `)
  })

  it('Should successfully push lots of values into a stack.', () => {
  
    testStack.push('2');
    testStack.push('3');
    testStack.push('4');
    testStack.push('5');
    
    expect(testStack.onlyValues()).toStrictEqual(` { 5 }  { 4 }  { 3 }  { 2 }  { 1 } `)
  })

  it('Should successfully pop a value off the front of the stack.', () => {
    testStack.pop()
    expect(testStack.onlyValues()).toStrictEqual(` { 4 }  { 3 }  { 2 }  { 1 } `)
  })
  
  it('Should successfully pop lots of values into a stack.', () => {
    testStack.pop()
    testStack.pop()
    testStack.pop()

    expect(testStack.onlyValues()).toStrictEqual(` { 1 } `)
  })

  it('Should successfully peek at the front of the stack and return the value.', () => {
    const testPeek = testStack.peek()
    expect(testPeek).toStrictEqual(1)
  })
  
  it('Should successfully return true signaling the stack to be empty.', () => {
    const testEmpty = testStack.isEmpty();
    expect(testEmpty).toStrictEqual(true)
  })
  
  
  it('Should successfully return a message that something broke if stack doesnt exist.', () => {

    console.log(testStack)
    const testPeek = testStack.peek()

    expect(testStack.pop()).toStrictEqual('HOW AM I SUPPOSED TO CHOP DOWN THIS TREE WITHOUT THERE BEING A TREE TO CHOP????')
    expect(testPeek).toStrictEqual('AINT NOTHING HERE TO SEE MY DUDE!!')
  })

})


describe('The following tests should flawlessly execute methods from a created class called Queue', () => {
  it('Should successfully enqueue a value into the line.', () => {
    

    testQueue.enqueue('1');
    expect(testQueue.onlyValues()).toStrictEqual(` { 1 } `)
  })

  it('Should successfully enqueue lots of values into a queue.', () => {
  
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    testQueue.enqueue(4);
    testQueue.enqueue(5);
    
    expect(testQueue.onlyValues()).toStrictEqual(` { 1 }  { 2 }  { 3 }  { 4 }  { 5 } `)
  })

  it('Should successfully dequeue a value off the front of the line.', () => {
    testQueue.dequeue()
    expect(testQueue.onlyValues()).toStrictEqual(` { 2 }  { 3 }  { 4 }  { 5 } `)
  })
  
  it('Should successfully peek at the front of the line and return the value.', () => {
    const testPeek = testQueue.peek()
    expect(testPeek).toStrictEqual(2)
  })
  
  it('Should successfully dequeue lots of values into a line.', () => {
    testQueue.dequeue()
    testQueue.dequeue()
    testQueue.dequeue()
    testQueue.dequeue()

    expect(testQueue.onlyValues()).toStrictEqual(``)
  })

  it('Should successfully return true signaling the string to be empty.', () => {
    const testEmpty = testQueue.isEmpty();
    expect(testEmpty).toStrictEqual(true)
  })
  
  

  
  
  // it('Should successfully return a message that something broke if line doesnt exist.', () => {


  //   const testPeek = testStack.peek()

  //   expect(testStack.dequeue()).toStrictEqual('HOW AM I SUPPOSED TO CHOP DOWN THIS TREE WITHOUT THERE BEING A TREE TO CHOP????')
  //   expect(testPeek).toStrictEqual('AINT NOTHING HERE TO SEE MY DUDE!!')
  // })

})