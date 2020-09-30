package javaChallenges;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class StacksAndQueuesTest {

    @Test
    public void stackQueue() throws Throwable {
        PsuedoQueue newQueue = new PsuedoQueue();

        newQueue.enqueue("cat");
        newQueue.enqueue("dog");
        newQueue.enqueue("dog");
        newQueue.enqueue("cat");
        newQueue.enqueue("cat");

        assertEquals("The top of stack1 should be cat.", "cat", newQueue.stack1.peekG());
        assertEquals("The entire stack should look like this", "{cat} -> {{cat} -> {{dog} -> {{dog} -> {{cat} -> {null}}}}}", newQueue.stack1.toString(newQueue.stack1));
        assertEquals("The dequeue should return the preferred pet 'dog' even though its not next in line.", "dog", newQueue.dequeue("dog"));
        assertEquals("The dequeue should return the preferred pet 'cat' and it is the next in line.", "cat", newQueue.dequeue("cat"));
        assertEquals("This test should prove the other test altered the stack with the bottom node removed", "{cat} -> {{cat} -> {{dog} -> {null}}}", newQueue.stack1.toString(newQueue.stack1));

        newQueue.enqueue("lizard");
        assertEquals("This should return the lizard that was just added.", "lizard", newQueue.dequeue("lizard"));
    }
}
