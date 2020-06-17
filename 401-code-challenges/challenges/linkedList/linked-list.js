'use-strict';

const minimist = require('minimist');
const argv = process.argv.slice(2);
const minArg = minimist(argv);


class LinkedList {
  constructor() {
    this.head = null;
  }


  insert(value)  {
    const firstNode = new Node(value);
    firstNode.next = this.head;
    this.head = firstNode

    return this.head
  }


  toString()  {
    let current = this.head;
    
    let string = '';
    while (current) {
      string += ` { ${current.value} } `
      current = current.next;
    }
    console.log(string)
    return string
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


  append(value)  {
    let current = this.head;

    while (current.next)  {
      current = current.next;  
    }
    this.insert(value)
    
    return this.head
  }


  insertBefore(value, newVal)  {
    let current = this.head;
    let newNode = new Node(newVal);
    while (current.next)  {

      if (current.next.value === value) {

        newNode.next = current.next;
        current.next = newNode;
        return this.head;
      }
      current = current.next;
    }
    return this.head;
  }


  insertAfter(value, newVal) {
    let current = this.head;
    let newNode = new Node(newVal);

    while (current)  {
      
      if (current.value === value) {
        let newNext = current.next
        current.next = newNode

        newNode.next = newNext
        return this.head
      }
      current = current.next;
    }
    return this.head;
  }

  deleteNode(delVal)  {
    let current = this.head;

    while (current.next)  {
      if (current.value === delVal) {
        current.next === current.next.next;

        return this.head
      }
      current = current.next;
    }
    return this.head;
  }

  counter() {
    let current = this.head;
    let i = 0;
    while(current)  {
      i++;
      current = current.next;
    }
    return i;
  }

  searchNode(nth) {
    let current = this.head;
    let k = this.counter() - (nth); 
    let j = k - 1;
    let i = 0;


    let a = [];
    while (current) {

      if (i === j)  {
        a.push(current.value);
      }
      i++
      current = current.next
    }

    return a[0];
  }
}


class Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


const linkedList = new LinkedList();

linkedList.insert('2')
linkedList.insert('8')
linkedList.insert('3')
linkedList.append('1')
linkedList.searchNode(2);

// linkedList.toString();



module.exports = ({
  LinkedList,
  Node,
})
