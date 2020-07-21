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

let tree3 = new treeIntersection.BinaryTree
let tree4 = new treeIntersection.BinaryTree

tree3.root = new treeIntersection.Node(345)
tree3.root.left = new treeIntersection.Node(1435)
tree3.root.left.left = new treeIntersection.Node(7542)
tree3.root.left.right = new treeIntersection.Node(733)
tree3.root.left.right.left = new treeIntersection.Node(8653)
tree3.root.left.right.right = new treeIntersection.Node(23456212)
tree3.root.right = new treeIntersection.Node(4527)
tree3.root.right.left = new treeIntersection.Node(2345)
tree3.root.right.right = new treeIntersection.Node(1234)
tree3.root.right.right.left = new treeIntersection.Node(7524)
tree3.root.right.right.right = new treeIntersection.Node(8563)

tree4.root = new treeIntersection.Node(23234)
tree4.root.left = new treeIntersection.Node(145)
tree4.root.left.left = new treeIntersection.Node(6245)
tree4.root.left.right = new treeIntersection.Node(6783)
tree4.root.left.right.left = new treeIntersection.Node(23465)
tree4.root.left.right.right = new treeIntersection.Node(47357)
tree4.root.right = new treeIntersection.Node(234)
tree4.root.right.left = new treeIntersection.Node(745)
tree4.root.right.right = new treeIntersection.Node(2346)
tree4.root.right.right.left = new treeIntersection.Node(457)
tree4.root.right.right.right = new treeIntersection.Node(2)


describe('This is a test of your tree traversing skills.', () => {

  it('Write a function that takes in 2 Binary trees, and returns values that occur in both trees in array form. If no matching values occur, return \'No Matching Values\'. Do not use any intrinsic methods found in Javascript. If you complete this, I\'ll give you a cookie.', () => {

    expect(treeIntersection.treeIntersection(tree1, tree2)).toStrictEqual([100,160,125,175,200,350,500])

    expect(treeIntersection.treeIntersection(tree3, tree4)).toStrictEqual('No Matching Values')
  
  })
})