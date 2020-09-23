package javaChallenges;

import org.junit.Test;

import static org.junit.Assert.*;

public class LLTest {
    @Test
    public void testLL() throws Exception{
//        LL linkedList = new LL();
//        linkedList.insert(1);
//        linkedList.insert(2);
//        linkedList.insert(3);
//        assertEquals("{3} -> {{2} -> {{1} -> {null}}}", "{3} -> {{2} -> {{1} -> {null}}}", linkedList.toString());
//        assertEquals("classUnderTest should return 'Node has been added.'", "Node has been added.", linkedList.insert(1));
//
//        assertTrue(linkedList.includes(2));
//        assertFalse(linkedList.includes(4));
//
//        linkedList.insertBefore(5,1);
//        assertEquals("This should return with {1} -> {{3} -> {{2} -> {{5} -> {{1} -> {null}}}}}", "{1} -> {{3} -> {{2} -> {{5} -> {{1} -> {null}}}}}", linkedList.toString());
//
//        linkedList.insertAfter(6,2);
//        assertEquals("This should return with {1} -> {{3} -> {{2} -> {{6} -> {{5} -> {{1} -> {null}}}}}}", "{1} -> {{3} -> {{2} -> {{6} -> {{5} -> {{1} -> {null}}}}}}", linkedList.toString());
//
//        linkedList.deleteNode(6);
//        assertEquals("This should return with {1} -> {{3} -> {{2} -> {{5} -> {{1} -> {null}}}}}", "{1} -> {{3} -> {{2} -> {{5} -> {{1} -> {null}}}}}", linkedList.toString());
//
//        assertEquals("Should equal 6", 2, linkedList.kthFromEnd(2));
    }

    @Test
    public void testZip() {
        LL linkedList = new LL();
        LL linkedList2 = new LL();
        linkedList.insert(1);
        linkedList.insert(3);
        linkedList.insert(5);
        linkedList.insert(7);
        linkedList2.insert(2);
        linkedList2.insert(4);
        linkedList2.insert(6);
        linkedList2.insert(8);

        linkedList.zip(linkedList, linkedList2);

        assertEquals("Should return {7} -> {{8} -> {{5} -> {{6} -> {{3} -> {{4} -> {{1} -> {{2} -> {null}}}}}}}}", "{7} -> {{8} -> {{5} -> {{6} -> {{3} -> {{4} -> {{1} -> {{2} -> {null}}}}}}}}", linkedList.toString());

    }

    @Test
    public void testZip2() {
        LL linkedList = new LL();
        LL linkedList2 = new LL();
        linkedList.insert(1);
        linkedList.insert(3);
        linkedList.insert(5);
        linkedList.insert(7);
        linkedList2.insert(2);
        linkedList2.insert(4);

        linkedList.zip(linkedList, linkedList2);

        assertEquals("Should return {7} -> {{4} -> {{5} -> {{2} -> {{3} -> {{1} -> {null}}}}}}", "{7} -> {{4} -> {{5} -> {{2} -> {{3} -> {{1} -> {null}}}}}}", linkedList.toString());

    }

    @Test
    public void testZip3() {
        LL linkedList = new LL();
        LL linkedList2 = new LL();

        linkedList.insert(5);
        linkedList.insert(7);
        linkedList2.insert(2);
        linkedList2.insert(4);
        linkedList2.insert(6);
        linkedList2.insert(8);

        linkedList.zip(linkedList, linkedList2);

        assertEquals("Should return {7} -> {{8} -> {{5} -> {{6} -> {{3} -> {{4} -> {{1} -> {{2} -> {null}}}}}}}}", "{7} -> {{8} -> {{5} -> {{6} -> {{4} -> {{2} -> {null}}}}}}", linkedList.toString());

    }
}


