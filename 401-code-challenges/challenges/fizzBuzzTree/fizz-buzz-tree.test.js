'use strict';

let newTree = require('./fizz-buzz-tree.js');

describe('Testing code challenge: FizzBuzz challenge 18.', () => {
  it('Should return the tree values with fizz and buzz mixed in to replace the values needing to be changed. Make sure its in array that shows the tree data structure.', () => {

    let tree = new newTree.kAryTree();

    tree.root = new newTree.Node(15);
    tree.root.children[0] = new newTree.Node(2);
    tree.root.children[1] = new newTree.Node(3);
    tree.root.children[2] = new newTree.Node(4);
    tree.root.children[0].children[0] = new newTree.Node(5);
    tree.root.children[0].children[1] = new newTree.Node(6);
    tree.root.children[1].children[0] = new newTree.Node(7)

    expect(tree.preOrder(tree.fizzBuzz(tree.root))).toStrictEqual([
      'FizzBuzz',
      [ '2', [ 'buzz' ], [ 'fizz' ] ],
      [ 'fizz', [ '7' ] ],
      [ '4' ]
    ]);



  });
});