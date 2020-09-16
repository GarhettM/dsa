package javaChallenges;

import org.junit.Test;
import static org.junit.Assert.*;

public class ArrayShiftTest {
    @Test public void testSomeLibraryMethod() {
        ArrayShift classUnderTest = new ArrayShift();
        int[] testArr = {1, 2, 3, 4};
        int[] expectedArr = {1, 2, 7, 3, 4};
        assertArrayEquals(expectedArr, classUnderTest.insertShiftArray(testArr,7));
    }
}
