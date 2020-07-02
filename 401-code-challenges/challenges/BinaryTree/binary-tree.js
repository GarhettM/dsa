'use strict';

class NextQueue {
  constructor(value)  {
    this.value = value;
    this.next = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(root) {
    console.log(root.value)

    if (root.left !== null) {
      this.preOrder(root.left)
    }
    if (root.right !== null) {
      this.preOrder(root.right)
    }
  }

  inOrder(root) {

    if (root.left !== null) {
      this.inOrder(root.left)
    }
    console.log(root.value)
    if (root.right !== null) {
      this.inOrder(root.right)
    }
  }

  postOrder(root) {
    if (root.left !== null) {
      this.postOrder(root.left)
    }
    if (root.right !== null) {
      this.postOrder(root.right)
    }
    console.log(root.value)
  }

  findMaximumValue(root, max) {

    if (root.value > max) {
      max = root.value;
    }
    if (root.left) {
      max = this.findMaximumValue(root.left, max)
    }
    if (root.right) {
      max = this.findMaximumValue(root.right, max)
    }

    return max;
  }

  breadthFirst(root)  {
    const queue = new Queue();
    const x = [];
    queue.enqueue(root)

    while (queue.front) {

      if (queue.front.value.left)  {       
        queue.enqueue(queue.front.value.left)
      }
      if (queue.front.value.right) {       
        queue.enqueue(queue.front.value.right)
      }


    x.push(queue.front.value.value)
    queue.dequeue();
    
    }

    return x;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(val) {
    let newLine = new NextQueue(val);
    if (this.rear) {
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

  peek() {
    return this.front.value;
  }

  onlyValues() {
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


class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {

  }

  contains(value) {

  }
}

let tree = new BinaryTree();

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.left.left = new Node(7)

tree.breadthFirst(tree.root)



module.exports = {
  Node,
  BinaryTree,
}