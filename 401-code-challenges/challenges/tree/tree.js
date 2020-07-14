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

  compareLeaves(treeRootA, treeRootB) {
    const rootA = treeRootA.root;
    const rootB = treeRootB.root;
    let treeA = 0;
    let treeB = 0;

    function traverseA(rootA, treeA)  {
      if(rootA.left)  {
        if(rootA.left === null && rootA.right === null) {
          treeA++
          console.log(treeA)
        }
        console.log(rootA.left)
        traverseA(rootA.left, treeA);
      }

      return treeA;
    }

    function traverseB(rootB, treeB)  {
      if(rootB)  {
        if(rootB.left === null && rootB.right === null) {
          treeB++
        }
        traverseB(rootB.left, treeB);
      }

      return treeB;
    }

    if(traverseA(rootA, treeA) === traverseB(rootB, treeB)) {
      return true;
    } else {
      return false;
    }
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
let treeA = new BinaryTree();
let treeB = new BinaryTree();

treeA.root = new Node(1);
treeA.root.left = new Node(2);
treeA.root.right = new Node(3);
treeA.root.left.left = new Node(4);
treeA.root.left.right = new Node(5);
treeA.root.right.left = new Node(6);
treeA.root.right.left.left = new Node(7)

treeB.root = new Node(1);
treeB.root.left = new Node(2);
treeB.root.right = new Node(3);
treeB.root.left.right = new Node(5);
treeB.root.right.left = new Node(6);


console.log(tree.compareLeaves(treeA, treeB))
