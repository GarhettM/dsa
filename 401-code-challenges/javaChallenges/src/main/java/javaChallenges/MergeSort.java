package javaChallenges;

public class MergeSort {

    public void mergeSort(int[] arr) {
        int n = arr.length;
        if(n > 1) {

            int mid = n/2;
            int[] left = new int[mid];
            int[] right = new int[n - mid];

            for(int i = 0; i < left.length; i++) {
                left[i] = arr[i];
            }
            for(int j = 0; j < right.length; j++) {
                right[j] = arr[j + mid];
            }

            mergeSort(left);
            mergeSort(right);
            merge(left, right, arr);
        }

    }

    public void merge(int [] left, int [] right, int [] arr) {

        int i = 0;
        int j = 0;
        int k = 0;

        while (i < left.length && j < right.length) {
            if(left[i] <= right[j]) {
                arr[k] = left[i];
                i += 1;
            } else {
                arr[k] = right[j];
                j += 1;
            }
            k += 1;
        }

        if(i == left.length) {
            for(int l = j; l < right.length; l++) {
                arr[k] = right[l];
            }
        } else {
            for(int m = i; m < left.length; m++) {
                arr[k] = left[m];
            }
        }
    }
}
