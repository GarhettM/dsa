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
}
