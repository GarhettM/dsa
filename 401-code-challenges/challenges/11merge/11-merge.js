'use strict';




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

  thisValue(idx){
    let current = this.head;
    let i = 0;
    let l = this.counter() - idx;
    let k = this.counter() - l
    const a = [];
    while(current)  {
      if (i === k)  {

        a.push(current.value)
      }
      i++
      current = current.next
    }
    return a[0]
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
}

class Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const firstLinkedList = new LinkedList();
const secondLinkedList = new LinkedList();
const mergedList = new LinkedList();

  firstLinkedList.insert('2')
  firstLinkedList.insert('3')
  firstLinkedList.insert('1')
  
  secondLinkedList.insert('4')
  secondLinkedList.insert('9')
  secondLinkedList.insert('5')
  
  function mergeList(l1, l2, l3) {

  let j = 0;
  let k = 0;
  let a = 0;

  for (let i = 0; i < (l1.counter() + l2.counter()); i++) {
    if (a === 0)  {  
      l3.insert(l1.thisValue(j))
      a = 1;
      j++
    } else if (a === 1) {     
      l3.insert(l2.thisValue(k))
      a = 0;
      k++
    }
  }
  return l3.toString()
}


module.exports = ({
  LinkedList,
  Node,
  mergeList
})