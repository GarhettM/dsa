#### kthFromEnd:

Method takes in an integer as the value from the tail of the Linked List.
Time: O(n)
Space O(n)

![image](./src/main/resources/Screen%20Shot%202020-09-22%20at%202.46.11%20PM.png)


#### zip:

Method takes in 2 linked lists and returns the "merged" single list of the two of them.

Time: 0(n)
Space: 0(2n) - Since we are not creating a third linked list to return and simply mutating one list to get the final result, the space is only 2 n.

![image](./src/main/resources/second%20whiteboard.PNG)


#### PseudoQueue

PsuedoQueue instantiates two new stacks to be utilized to "act" as a Queue.

Methods: 

    enqueue - utilizes the push method to add a node to the stack.
    dequeue - utilizes both stacks and used the push and pop methods to deconstruct 
              the initial passed in stack, and builds the second stack(aka reversing the stack)
              Then it pops the top off the second stack 
              Then it builds the first stack back up with the values from the second.
Testing:

    Tests make sure the enqueue works both by checking the entire stack and the return values

![image](./src/main/resources/challenge11.PNG)