'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class kAryTree {
  constructor() {
    this.root = null;
  }

  preOrder(root) {
    console.log(root.value)

    for (let i = 0; i < root.children.length; i++) {
      if (root.children[i] !== null) {
        this.preOrder(root.children[i])
      }
    }
  }

  fizzBuzz(root) {
    let newTree = new kAryTree();

    if (root.value % 3 === 0) {
      newTree = new Node('fizz')
    }
    if (root.value % 5 === 0) {
      newTree = new Node('buzz')
    }
    if (root.value % 5 === 0 && root.value % 3 === 0) {
      newTree = new Node('FizzBuzz')
    }
    if (root.value % 3 !== 0 && root.value % 5 !== 0) {
      newTree = new Node(`${root.value}`)
    }
    for (let i = 0; i < root.children.length; i++) {
      if (root.children[i] !== null) {
        newTree.children[i] = this.fizzBuzz(root.children[i], newTree.children[i])
      }
    }
    return newTree
  }

  // inOrder(root) {

  //   if(root.left !== null)  {
  //     this.inOrder(root.left)
  //   }
  //   console.log(root.value)
  //   if(root.right !== null) {
  //     this.inOrder(root.right)
  //   }
  // }

  // postOrder(root) {
  //   if(root.left !== null)  {
  //     this.postOrder(root.left)
  //   }
  //   if(root.right !== null) {
  //     this.postOrder(root.right)
  //   }
  //   console.log(root.value)
  // }
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

let tree = new kAryTree();

tree.root = new Node(15);
tree.root.children[0] = new Node(2);
tree.root.children[1] = new Node(3);
tree.root.children[2] = new Node(4);
tree.root.children[0].children[0] = new Node(5);
tree.root.children[0].children[1] = new Node(6);
tree.root.children[1].children[0] = new Node(7)

// tree.postOrder(tree.root)

console.log(tree.fizzBuzz(tree.root))

