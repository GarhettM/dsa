package javaChallenges;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class StacksAndQueuesTest {

    @Test
    public void stackQueue() throws Throwable {
        PsuedoQueue newQueue = new PsuedoQueue();

        newQueue.enqueue(2);
        newQueue.enqueue(4);
        newQueue.enqueue(6);
        newQueue.enqueue(8);

        assertEquals("The top of stack1 should be 8", 8, newQueue.stack1.peek());
        assertEquals("The entire stack should look like this", "{8} -> {{6} -> {{4} -> {{2} -> {null}}}}", newQueue.stack1.toString(newQueue.stack1));
        assertEquals("The dequeue should return the dequeued value", 2, newQueue.dequeue());
        assertEquals("This test should prove the other test altered the stack with the bottom node removed", "{8} -> {{6} -> {{4} -> {null}}}", newQueue.stack1.toString(newQueue.stack1));

    }
}
