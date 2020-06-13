'use-strict';

const minimist = require('minimist');
const argv = process.argv.slice(2);

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value)  {
    const firstNode = new Node(value);
    firstNode.next = this.head;
    this.head = firstNode
    console.log(this.head)
    return this.head
  }


  toString()  {
    let current = this.head;
    
    let string = '';
    while (current) {
      string += ` { ${current.value} } `
      current = current.next;
    }
    console.log(string += ' NULL ')
  }


  includes(test)  {
    let current = this.head;

    if (test !== undefined)  {
      while (current) {
        if (current.value === test) {
        console.log(true)
        } else  {
          console.log(false);
        }
        current = current.next
      }
    } else {
      console.error('This value is undefined and can\'t be included.')
    }
  }
}


class Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


const linkedList = new LinkedList();

linkedList.insert('garhett')
linkedList.insert('is the')
linkedList.insert('best')

linkedList.toString()


