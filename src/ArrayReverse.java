public class ArrayReverse {

    public static void main(String[] args) {
        int[] array = [1,2,3,4,5];
        int[] array2 = [1,2,3,4,5,6];

        System.out.println(array);
        System.out.println(reverseIt(array));
        System.out.println(array2);
        System.out.println(reverseIt(array2));
    }
    public int[] reverseIt(int[] arr) {
        int pointer1 = 0;
        int pointer2 = arr.length-1;

        while(pointer2 > pointer1) {
            int temp = arr[pointer1];
            arr[pointer1] = arr[pointer2];
            arr[pointer2] = temp;

            pointer1++;
            pointer2--;
        }
        return arr;
    }
}