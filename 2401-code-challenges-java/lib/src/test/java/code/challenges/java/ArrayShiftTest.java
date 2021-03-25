package code.challenges.java;


import org.junit.Test;
import static org.junit.Assert.*;
import java.util.ArrayList;

public class ArrayShiftTest {

    @Test
    public void arrShiftTest() {

        ArrayList<Integer> testArr = new ArrayList<>();
        testArr.add(3);
        testArr.add(6);
        testArr.add(7);
        testArr.add(9);
        int [] tester = {3, 6, 7, 8, 9};
        assertArrayEquals(tester, ArrayShift.S);
    }
}
