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
}
