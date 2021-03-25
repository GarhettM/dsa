public class ArrayReverse {

    public static void main(String[] args) {
        int[] array = {1,2,3,4,5};
        int[] array2 = {1,2,3,4,5,6};
        
        reverseIt(array);
        reverseIt(array2);
        for(int element: array) {
            System.out.println(element);
        }
        for(int element1: array2) {
            System.out.println(element1);
        }
    }
    public static int[] reverseIt(int[] arr) {
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