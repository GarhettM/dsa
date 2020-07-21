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

  preOrderPushValuesToArr(root)  {
    this.allValArr.push(root.value)
    if(root.left !== null)  {
      this.preOrderPushValuesToArr(root.left)
    }
    if(root.right !== null)  {
      this.preOrderPushValuesToArr(root.right)
    }
    return this.allValArr
  }

  preOrderPushValuesToObj(root)  {
    this.allValObj[root.value] = 'match'
    if(root.left !== null)  {
      this.preOrderPushValuesToObj(root.left)
    }
    if(root.right !== null)  {
      this.preOrderPushValuesToObj(root.right)
    }
    return this.allValObj
  }
}

function treeIntersection(tree1, tree2) {
  let arr1 = [...tree1.preOrderPushValuesToArr(tree1.root)]
  let obj2 = {...tree2.preOrderPushValuesToObj(tree2.root)}
  let values = [];
  let validate = false
  
  for(let i = 0; i < arr1.length; i++)  {
    if (obj2[arr1[i]] === 'match') {
      validate = true
      values.push(arr1[i])
    }     
  }

  if(validate === false) {
    return 'No Matching Values'
  } else {
    return values;
  }
}


module.exports = {
  Node,
  BinaryTree,
  treeIntersection,
}