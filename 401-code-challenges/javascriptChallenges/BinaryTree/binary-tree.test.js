'use strict';

const treeValue = require('./binary-tree.js');

const Node = treeValue.Node;
const BinaryTree = treeValue.BinaryTree;


xdescribe('Testing code challenge:', () => {
  it('Should return the highest value in the tree!', () => {
    
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.left = new Node(6);
    tree.root.right.left.left = new Node(7)

    expect(tree.findMaximumValue(tree.root, 0)).toStrictEqual(7);

  })

  it('Should return the highest value in the tree!', () => {
    
    let tree = new BinaryTree();
    tree.root = new Node(4);
    tree.root.left = new Node(1);
    tree.root.right = new Node(7);
    tree.root.left.left = new Node(23);
    tree.root.left.right = new Node(4);
    tree.root.right.left = new Node(8);
    tree.root.right.left.left = new Node(2)

    expect(tree.findMaximumValue(tree.root, 0)).toStrictEqual(23);

  })
})

describe('Testing code challenge:', () => {
  it('Should return an array with the values in Breadth First Order.', () => {
    
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right.left = new Node(6);
    tree.root.right.left.left = new Node(7)

    expect(tree.breadthFirst(tree.root)).toStrictEqual([
      1, 2, 3, 4,
      5, 6, 7
    ]);

  });
});