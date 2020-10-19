package javaChallenges;

import org.junit.Test;

import java.util.EmptyStackException;

import static org.junit.Assert.*;

public class InsertionSortTest {

    private Object EmptyStackException;

    @Test
    public void testSomeLibraryMethod() throws Exception {
        int[] classUnderTest = new int[] {8,4,23,42,16,15};
        int[] expected = new int[] {4, 8, 15, 16, 23, 42};

        int[] negativeNum = new int[] {9, 23, -14, -10, 2, 18};
        int[] expected2 = new int[] {-14, -10, 2, 9, 18, 23};
        
        int[] throwArr = new int[] {};


        assertArrayEquals("Array should be sorted.", expected, InsertionSort.insertionSort(classUnderTest));
        assertArrayEquals("Array should be sorted.", expected2, InsertionSort.insertionSort(negativeNum));

        Exception exception = assertThrows(Exception.class, () -> {
           InsertionSort.insertionSort(throwArr);
        });

        String expectedMessage = "No values inside array.";
        String actual = exception.getMessage();

        assertTrue(actual.contains(expectedMessage));
    }


}
