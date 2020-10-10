'use strict';
// NOTE for TA: I found a great sample JS linked list and supporting info here --> https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3

// Challenge 07 NOTE for TA: followed this suggestion --> https://medium.com/javascript-in-plain-english/algorithm-in-javascript-linked-list-remove-the-k-th-node-leetcode-challenge-9b6a98d8a3b8

//Node class that has properties for the value stored in the Node, and a pointer to the next Node.

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    };
};

//LinkedList class, includes a head property. Upon instantiation, an empty Linked List should be created.

class LinkedList {
    constructor() {
        this.head = null;
    };
    //TODO: Check for O(1) Time performance.
    insert(value) {
        try {
            let addedNode = new Node(value);//adds a new node with that value
            addedNode.next = this.head; //next is assigned as the head pointer
            this.head = addedNode; //head points at the newly added Node.
            return this.head;
        }
        catch (error) {
            console.error('Something went wrong! This is what happened:' + error);
        };
    };

    includes(value) {
        try {
            let currentNode = this.head;
            while(currentNode) { //while a node exists somewhere within the list
                if(currentNode.value === value) { //check if that value exists as the node's value.
                    return true;
                }
                currentNode = currentNode.next;
            }
            return false;
        }
        catch(error) {
            console.error('Something went wrong! This is what happened:' + error);
        };
    };
    // This method returns a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL"
    toString () {
        try {
            let currentNode = this.head;
            let listValtoString = ''; //empty string to append extracted strings representing all the values in the Linked List.
            while (currentNode) { //for every node that exists in our list
                listValToString = listValtoString + `{ ${currentNode.value} } -> `;
                currentNode.next = currentNode;
            }
            listValtoString = listValtoString + `NULL`; // when it breaks out of while statement, append NULL to the end of the resultant string.
            return listValtoString;
        }
        catch(error) {
            console.error('Something went wrong! This is what happened:' + error);
        };
    };
    //This method adds a new node with the given value to the end of the list.
    append(value) {
        try {
            let appended = new Node(value); // A newNode object is created with property value and next=null
            // When head = null, it means the list is empty, s head itself will point to the newNode.
            if(!this.head) {
                this.head = appended;
                return this.head;
            } // Else, traverse the list to find the tail (at first it's gonna point at null), and update the tail's next pointer.
            let tailNode = this.head;
            while(tailNode.next !== null) {
                tailNode = tailNode.next;
            }
            tailNode.next = appended;
            return this.head;
        }
        catch (error) {
            console.error('Something went wrong! This is what happened:' + error);
        }
    };
    
    //This method adds a new node with the given newValue immediately before the first value node.
    insertBefore(value, newVal)  {
        try {
            let addedNode = new Node(newVal);//adds a new node to the list
            let currentNode = this.head;
            if (currentNode.value === value) {//if passed in value exists as the node's value.
                addedNode.next = this.head;
                this.head = addedNode; //head points at the newly added Node.
                return this.head;
            }
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    addedNode.next = currentNode.next;
                    currentNode.next = addedNode;
                    return this.head;
                }
                currentNode = currentNode.next; // if there's only one node, the added node is placed after the head node in the list.
            }
            return this.insert(newVal);
        }
        catch (error) {
            console.error('Something went wrong! This is what happened:' + error);
        }
    };
    //This method adds a new node with the given newValue immediately after the first value node.
    insertAfter(value, newVal)  {
        try {
            let addedNode = new Node(newVal);//adds a new node to the list
            let currentNode = this.head; // current node set to head.
            while (currentNode) {
                if (currentNode.value === value) {
                    addedNode.next = currentNode.next;
                    currentNode.next = addedNode; // if the value doesn't exist then the added node is placed at the start of linked list. 
                    return this.head; 
                }
                currentNode = currentNode.next;
            }
            return this.insert(newVal);
        }
        catch (error) {
            console.error('Something went wrong! This is what happened:' + error);
        }
    };
    //TODO: Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

    /*  1. Create and assign a variable called frontPointer to HEAD, then move with k-1 steps forward.
        2. Create a variable called backPointer, assign it to null.
        3. Move both "pointers" forward until frontPointer points to the last node.
        4. Remove the node at back pointer.
        5. If backPointer is null, That means we’re trying to remove HEAD from the list, return head's next.
        6. Otherwise, set backPointer.next to backPointer.next.next. Return head.
    */
    counter() {
      let current = this.head;
      let a = 0;
      while(current)  {
        a++
        current = current.next;
      }

      return a 
    }
    kthFromTheEnd (k) {
      let current = this.head;
      let backPointer = current;
      let pointer = []; 
      let a = 0;
      let j = this.counter() - (k);


      while(current) {
        if (k > a)  {
          pointer.push(null)
        }
        if (k === a) {
          pointer.push(backPointer.value)
          backPointer = backPointer.next
        }
        if (k < a)  {
          pointer.push(backPointer.value)
          backPointer = backPointer.next;
        }

        a++
        current = current.next;
      }
      console.log(pointer)
      console.log(pointer[j-1])
    };
};

const linkedList = new LinkedList();

linkedList.insert(0);
linkedList.insert(2);
linkedList.insert(6);
linkedList.insert(9);
linkedList.insert(15);
linkedList.kthFromTheEnd(1);


// export LinkedList for testing.
module.exports = LinkedList;