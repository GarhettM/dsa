package challenges;

import java.util.ArrayList;

public class ArrayShift {

    public static ArrayList<Integer> shiftArray(ArrayList<Integer> arr, int n) {

        ArrayList<Integer> newArr = new ArrayList<>();
        boolean toggle = false;
        int j = 0;

        for (int i = 0; i < arr.size(); i++) {
            if(n < arr.get(i)) {
                newArr.add(arr.get(i));
                continue;
            }
            newArr.add(n);
            j = i + 1;
            break;
        }

        for(int k = j; j < arr.size(); k++) {
            newArr.add(arr.get(k));
        }

        return arr;
    }

}

