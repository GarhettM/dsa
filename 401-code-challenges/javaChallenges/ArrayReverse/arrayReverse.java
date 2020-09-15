// I struggled with getting the hang of the syntax so I went to https://www.geeksforgeeks.org/reverse-an-array-in-java/ for a little help with this one. 

public class arrayReverse {
  public static void reverse(int a[], int n) {
    int[] b = new int[n];
    int j = n;

    for (int i = 0; i < n; i++) {
      b[j - 1] = a[i];
      j = j -1; 
    }

    for (int k = 0; k < n; k++) {
      System.out.println(b[k]);
    }
  }

  public static void main(String[] args) {
    int[] arr = {1, 2, 3, 4, 5};
    reverse(arr, arr.length);
  }
}

// ended up figuring it out in the end but Java is not the same thing as Javascript but I am noticing that the algorithyms look similar.