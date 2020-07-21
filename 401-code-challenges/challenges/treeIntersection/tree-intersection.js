'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null
    this.allValArr = []
    this.allValObj = {}
  }

  preOrderPushValues(root)  {
    this.allValArr.push(root.value)
    this.allValObj[root.value] = 'match'
    if(root.left !== null)  {
      this.preOrderPushValues(root.left)
    }
    if(root.right !== null)  {
      this.preOrderPushValues(root.right)
    }
    return this.allValArr
  }
}

function treeIntersection(tree1, tree2) {
  let arr1 = [...tree1.preOrderPushValues(tree1.root)]
  tree2.preOrderPushValues(tree2.root)
  let obj2 = tree2.allValObj
  let values = [];
  for(let i = 0; i < arr1.length; i++)  {
    if (obj2[arr1[i]] === 'match') {
      values.push(arr1[i])
    }     
  }
  return values;
}


module.exports = {
  Node,
  BinaryTree,
  treeIntersection,
}