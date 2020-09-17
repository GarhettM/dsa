package javaChallenges;

public class BinarySearch {
    public int binarySearch(int[] arr, int a, int z, int n) {

        if(a <= z) {
            int mid = (a + z) / 2;
            System.out.println(mid);
            if (arr[mid] == n) {
                return mid;
            }

            if (arr[mid] > n) {
                return binarySearch(arr, a, mid - 1, n);
            }
            if (arr[mid] < n) {
                return binarySearch(arr, mid + 1, z, n);
            }
        }
        return -1;
    }
}
