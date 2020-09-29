package javaChallenges;

import java.util.ArrayList;

public class PsuedoQueue {

    public StacksAndQueues stack1;
    public StacksAndQueues stack2;
    public Object Exception;


    public PsuedoQueue() {
        stack1 = new StacksAndQueues();
        stack2 = new StacksAndQueues();
    }

    public void enqueue(int value) {
        stack1.push(value);
    }

    public int dequeue() throws Throwable {
        System.out.println("begin stack1: " + stack1.toString(stack1));

        while(stack1.top != null) {
            stack2.push(stack1.pop());
        }

        int temp = stack2.pop();

        while (stack2.top != null) {
            stack1.push(stack2.pop());
        }

        System.out.println("stack1 final: " + stack1.toString(stack1));
        System.out.println("Dequeued value: " + temp);
        return temp;
    }

}
