package javaChallenges;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class BinarySearchTest {
    @Test
    public void testBinarySearch() {
        BinarySearch classUnderTest = new BinarySearch();
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 23, 25, 72, 11442};
        int m = 3;
        int n = 9;
        int z = arr.length - 1;
        assertEquals("testBinarySearch should return -1", -1, classUnderTest.binarySearch(arr, 0, z, n));
        assertEquals("testBinarySearch should return 2", 2, classUnderTest.binarySearch(arr, 0, z, m));
    }
}
