'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues.js')

class PseudoQueue {
  constructor() {
    this.one = new Stack.Stack();
    this.two = new Stack.Stack();
  }

  enqueue(value)  {
    this.one.push(value);
    return this.one.value;
  }

  dequeue() {
    while(this.one.isEmpty() === false) {
      let value = this.one.pop().value;
      this.two.push(value)
    }
    return this.two.pop();
  }
}

let myQueue = new PseudoQueue();
myQueue.enqueue(10);
myQueue.enqueue(15);
myQueue.enqueue(20);
console.info('first log', myQueue);
myQueue.enqueue(5);
console.log(myQueue);
console.info(myQueue.dequeue());
console.log(myQueue);