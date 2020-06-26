'use strict';

class Node {
  constructor(value)  {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(root)  {
    console.log(root.value)

    if(root.left !== null)  {
      this.preOrder(root.left)
    }
    if(root.right !== null) {
      this.preOrder(root.right)
    }
  }

  inOrder(root) {
    
    if(root.left !== null)  {
      this.inOrder(root.left)
    }
    console.log(root.value)
    if(root.right !== null) {
      this.inOrder(root.right)
    }
  }

  postOrder(root) {
    if(root.left !== null)  {
      this.postOrder(root.left)
    }
    if(root.right !== null) {
      this.postOrder(root.right)
    }
    console.log(root.value)
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

tree.postOrder(tree.root)
