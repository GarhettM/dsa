package javaChallenges;

public class ArrayShift {
    public int[] insertShiftArray(int[] arr, int n) {
        int x = arr.length/2;
        int[] newArr = new int[arr.length+1];
        int y = 0;
        for (int i = 0; i < arr.length+1; i++) {
            if(i == x) {
                newArr[i] = n;
                continue;
            }
            newArr[i] = arr[y];
            y++;
        }
        return newArr;
    }
}
