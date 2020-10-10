'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push(val)  {
    let newStack = new Node(val);
    newStack.next = this.top;
    this.top = newStack;
  }

  pop() { 
    if (this.top !== null) {
      let remove = this.top;
      this.top = this.top.next;
      remove.next = null;
      return remove;
    }
      return ('HOW AM I SUPPOSED TO CHOP DOWN THIS TREE WITHOUT THERE BEING A TREE TO CHOP????')

  }
  

  peek()  {
    if (this.top.value) {
    return this.top.value
    }
    console.log('AINT NOTHING HERE TO SEE MY DUDE!!')
  }

  onlyValues()  {
    let current = this.top;
    
    let string = '';
    while (current) {
      string += ` { ${current.value} } `
      current = current.next;
    }
    return string
  }
  
  isEmpty() {
    return (this.top === null)
  }
}

const stackThings = new Stack();

// stackThings.push(1, 2, 3, 4);
stackThings.push('2');
stackThings.push('3');
stackThings.push('4');
stackThings.pop()
stackThings.pop()



// console.log(stackThings.onlyValues())
// console.log(stackThings.pop())
console.log(stackThings.isEmpty())


class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(val) {
    let newLine = new Node(val);
    if (this.rear)  { 
    this.rear.next = newLine
    } else {
      this.front = newLine
    }
    this.rear = newLine
  }

  dequeue() {
    let removed = this.front.value
    this.front = this.front.next;
    return removed;
  }

  peek()  {
    return this.front.value;
  }

  onlyValues()  {
    let current = this.front;
    
    let string = '';
    while (current) {
      string += ` { ${current.value} } `
      current = current.next;
    }
    return string
  }

  isEmpty() {
    return (this.front === null)
  }
}

const newLine = new Queue();

// newLine.enqueue('1')
// newLine.enqueue('2')
// newLine.enqueue('3')
// newLine.enqueue('4')
// newLine.dequeue()
// console.log(newLine)

module.exports = {
  Node,
  Stack,
  Queue,
}