package challenges;

import org.junit.Test;
import static org.junit.Assert.*;

public class LinkedListTest {

    @Test
    public void insertTest() {
        LinkedList testLL = new LinkedList();
        testLL.insert(2);
        testLL.insert(4);
        testLL.insert(6);
        testLL.insert(8);
        assertEquals("HEAD ->  8 ->  6 ->  4 ->  2 ->  NULL", testLL.toString());
    }

    @Test
    public void includesTest() {
        LinkedList testLL = new LinkedList();
        testLL.insert(2);
        testLL.insert(4);
        testLL.insert(6);
        testLL.insert(8);
        assertTrue(testLL.includes(6));
        assertFalse(testLL.includes(5));
    }

    @Test
    public void toStringTest() {
        LinkedList testLL = new LinkedList();
        testLL.insert(2);
        testLL.insert(4);
        testLL.insert(6);
        testLL.insert(8);
        assertEquals("HEAD ->  8 ->  6 ->  4 ->  2 ->  NULL", testLL.toString());
    }

    @Test
    public void appendTest() {
        LinkedList testLL = new LinkedList();
        testLL.insert(2);
        testLL.insert(4);
        testLL.insert(6);
        testLL.insert(8);
        testLL.append(0);
        assertEquals("HEAD ->  8 ->  6 ->  4 ->  2 ->  0 ->  NULL", testLL.toString());
    }

    @Test
    public void insertBeforeTest() {
        LinkedList testLL = new LinkedList();
        testLL.insert(2);
        testLL.insert(4);
        testLL.insert(6);
        testLL.insert(8);
        testLL.insertBefore(5, 4);
        assertEquals("HEAD ->  8 ->  6 ->  5 ->  4 ->  2 ->  NULL", testLL.toString());
    }

    @Test
    public void insertAfterTest() {
        LinkedList testLL = new LinkedList();
        testLL.insert(2);
        testLL.insert(4);
        testLL.insert(6);
        testLL.insert(8);
        testLL.insertAfter(3, 4);
        assertEquals("HEAD ->  8 ->  6 ->  4 ->  3 ->  2 ->  NULL", testLL.toString());
    }

    @Test
    public void kthFromTheEndTest() {
        LinkedList testLL = new LinkedList();
        testLL.insert(2);
        testLL.insert(4);
        testLL.insert(6);
        testLL.insert(8);
        assertEquals(4, testLL.kthFromEnd(2));
    }

    @Test
    public void llZipTest() {
        LinkedList testLL1 = new LinkedList();
        testLL1.insert(0);
        testLL1.insert(1);
        testLL1.insert(3);
        testLL1.insert(5);
        testLL1.insert(7);
        testLL1.insert(9);

        LinkedList testLL2 = new LinkedList();
        testLL2.insert(2);
        testLL2.insert(4);
        testLL2.insert(6);
        testLL2.insert(8);
        testLL1.llZip(testLL1, testLL2);

        assertEquals("HEAD ->  9 ->  8 ->  7 ->  6 ->  5 ->  4 ->  3 ->  2 ->  1 ->  0 ->  NULL", testLL1.toString());

        LinkedList testLL3 = new LinkedList();
        testLL3.insert(7);
        testLL3.insert(9);

        LinkedList testLL4 = new LinkedList();
        testLL4.insert(2);
        testLL4.insert(4);
        testLL4.insert(6);
        testLL4.insert(8);
        testLL3.llZip(testLL3, testLL4);

        assertEquals("HEAD ->  9 ->  8 ->  7 ->  6 ->  4 ->  2 ->  NULL", testLL3.toString());

    }
}
