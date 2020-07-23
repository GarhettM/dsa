'use strict';

class HashMap {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size)
    this.keysArr = [];
    this.keysObj = {};
  }


  hash(key) {
    let charArray = key.split('');
    let hashSum = charArray.reduce((total, char) => {
      return total + char.charCodeAt(0);
    }, 0) * 599;

    let hashIndex = hashSum % this.size;
    return hashIndex;
  }

  add(key, value) {
    this.keysArr.push(key)
    this.keysObj[key] = value;
    let hash = this.hash(key);
    if (!this.buckets[hash]) {
      this.buckets[hash] = new LinkedList();
    }

    let entry = { [key]: value };

    this.buckets[hash].add(entry)
    return this.buckets[hash]
  }

  get(key) {
    let getIndex = this.buckets[this.hash(key)]

    if (!getIndex) {
      console.log('No Value')
      return 'No Value';
    }

    if (getIndex) {
      let values = ''
      let current = getIndex.head
      while (current) {
        let test = Object.keys(current.value)
        if (key === test[0]) {
          let retVal = Object.values(current)
          values = (Object.values(retVal[0]))[0]
        }
        current = current.next;
      }
      if (values !== '') {
        return values
      } else {
        return 'No Value';
      }
    }
  }


contains(key) {
  let boolean = false
  let getIndex = this.buckets[this.hash(key)]

  if (!getIndex) {
    console.log(false)
    return false;
  }
  if (getIndex) {
    let current = getIndex.head
    while (current) {
      let test = Object.keys(current.value)

      if (key === test[0]) {
        boolean = true
      }
      current = current.next;
    }
    return boolean
  }
}
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

module.exports = {
  HashMap,
  LinkedList,
  Node,
}