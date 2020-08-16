## Insertion Sort Pass example

On the first pass, the array is being passed into a for loop. 
  The variable "i" is set to 1 because j is set to i-1.

Inside the for loop, we define j and temp.
  `j = i-1`
  `temp = arr[i]`

We then jump into a while loop with the following condition.
  `j>=0 and temp < arr[j]`

While this is true, we reassign arr[j+1] and set it equal to arr[j] 
  This brings the higher value to the right of the current value in the array.

While its true, we reassign j back to j -1 to loop back through the same spot in the array to continue the sorting.

Once the while loop stops being true, we reassign arr[j+1] to equal the temp value and then run back through a second time.

[Whiteboarding](../assets/codechallenge26whiteboard.jpg)
