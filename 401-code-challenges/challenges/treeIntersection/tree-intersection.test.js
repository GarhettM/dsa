'use strict';

const treeIntersection = require('./tree-intersection.js')

let tree1 = new treeIntersection.BinaryTree
let tree2 = new treeIntersection.BinaryTree

tree1.root = new treeIntersection.Node(150)
tree1.root.left = new treeIntersection.Node(100)
tree1.root.left.left = new treeIntersection.Node(75)
tree1.root.left.right = new treeIntersection.Node(160)
tree1.root.left.right.left = new treeIntersection.Node(125)
tree1.root.left.right.right = new treeIntersection.Node(175)
tree1.root.right = new treeIntersection.Node(250)
tree1.root.right.left = new treeIntersection.Node(200)
tree1.root.right.right = new treeIntersection.Node(350)
tree1.root.right.right.left = new treeIntersection.Node(300)
tree1.root.right.right.right = new treeIntersection.Node(500)

tree2.root = new treeIntersection.Node(42)
tree2.root.left = new treeIntersection.Node(100)
tree2.root.left.left = new treeIntersection.Node(15)
tree2.root.left.right = new treeIntersection.Node(160)
tree2.root.left.right.left = new treeIntersection.Node(125)
tree2.root.left.right.right = new treeIntersection.Node(175)
tree2.root.right = new treeIntersection.Node(600)
tree2.root.right.left = new treeIntersection.Node(200)
tree2.root.right.right = new treeIntersection.Node(350)
tree2.root.right.right.left = new treeIntersection.Node(4)
tree2.root.right.right.right = new treeIntersection.Node(500)


describe('This is a test of your tree traversing skills.', () => {

  it('Write a function that takes in 2 Binary trees, and returns values that occur in both trees. Do not use any intrinsic methods found in Javascript. If you complete this, I\'ll give you a cookie.', () => {

    

    expect(treeIntersection.treeIntersection(tree1, tree2)).toStrictEqual([100,160,125,175,200,350,500])


  })
})