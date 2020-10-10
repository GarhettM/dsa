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
    this.root = null;
    this.allValArr = [];
    this.allValObj = {};
  }

  preOrder(root)  {
    this.allValArr.push(root.value);
    this.allValObj[root.value] = 'match';
    if(root.left !== null)  {
      this.preOrder(root.left);
    }
    if(root.right !== null)  {
      this.preOrder(root.right);
    }
  }
}

function treeIntersection(tree1, tree2) {
  tree1.preOrder(tree1.root);
  tree2.preOrder(tree2.root);
  let arr1 = [...tree1.allValArr];
  let obj2 = {...tree2.allValObj};
  let values = [];
  let validate = false;

  for(let i = 0; i < arr1.length; i++)  {
    if (obj2[arr1[i]] === 'match') {
      validate = true;
      values.push(arr1[i]);
    }     
  }

  if(validate === false) {
    return 'No Matching Values';
  } else {
    return values;
  }
}


module.exports = {
  Node,
  BinaryTree,
  treeIntersection,
}