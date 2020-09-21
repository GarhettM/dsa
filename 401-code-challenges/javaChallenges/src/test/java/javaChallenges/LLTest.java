package javaChallenges;

import org.junit.Test;

import static org.junit.Assert.*;

public class LLTest {
    @Test
    public void testLL() {
        LL linkedList = new LL();
        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        assertEquals("{3} -> {{2} -> {{1} -> {null}}}", "{3} -> {{2} -> {{1} -> {null}}}", linkedList.toString());
        assertEquals("classUnderTest should return 'Node has been added.'", "Node has been added.", linkedList.insert(1));

        assertTrue(linkedList.includes(2));
        assertFalse(linkedList.includes(4));

        linkedList.insertBefore(5,1);
        assertEquals("This should return with {1} -> {{3} -> {{2} -> {{5} -> {{1} -> {null}}}}}", "{1} -> {{3} -> {{2} -> {{5} -> {{1} -> {null}}}}}", linkedList.toString());

        linkedList.insertAfter(6,2);
        assertEquals("This should return with {1} -> {{3} -> {{2} -> {{6} -> {{5} -> {{1} -> {null}}}}}}", "{1} -> {{3} -> {{2} -> {{6} -> {{5} -> {{1} -> {null}}}}}}", linkedList.toString());

        linkedList.deleteNode(6);
        assertEquals("This should return with {1} -> {{3} -> {{2} -> {{5} -> {{1} -> {null}}}}}", "{1} -> {{3} -> {{2} -> {{5} -> {{1} -> {null}}}}}", linkedList.toString());
    }
}


