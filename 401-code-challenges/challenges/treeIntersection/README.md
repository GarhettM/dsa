# Tree Intersection
I basically used the preOrder method to push the values of the tree into an allValArr and an allValObj which were defined in the constructor. Then I one tree's allValArr to traverse throough while using the second tree's allValObj to compare values with. Thus, keeping this function an O(n) function as opposed to O(n^2) function with multiple loops. 

## Challenge
Class 32: Tests, npm test. Function being tested is `treeIntersection(tree1, tree2)`

## Approach & Efficiency
I tooks this approach to create the quickest results. At first I used 2 for loops to traverse two arrays because thats what I knew how to do really fast just to get it to work. Then I refactored the constructor to allow for an all encompassing object to be created  with the "keys" as values inside the tree. That obj was used as a map for the other trees array to iterate through to compare whether or not the other tree had its same values spread out accross it.


## WhiteBoard
Check it!

![image](assets/challenge32.PNG)

