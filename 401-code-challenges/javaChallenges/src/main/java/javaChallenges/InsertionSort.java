package javaChallenges;

import java.util.EmptyStackException;

public class InsertionSort {

    public static int[] insertionSort(int[] arr) throws Exception {
        if(arr.length < 1) {
            throw new Exception("No values inside array.");
        }
        for(int i = 1; i < arr.length; i++) {
            int j = i - 1;
            int temp = arr[i];

            while(j >= 0 && temp < arr[j]) {
                arr[j+1] = arr[j];
                j = j - 1;
            }
            arr[j+1] = temp;
        }
        return arr;
    }
}
