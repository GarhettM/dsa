package code.challenges.java;

import java.util.ArrayList;

public class ArrayShift {

    public ArrayList<Integer> ShiftArray(ArrayList<Integer> arr, int n) {
        ArrayList<Integer> newArr = new ArrayList<>();
        boolean toggle = false;
        int j;

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
