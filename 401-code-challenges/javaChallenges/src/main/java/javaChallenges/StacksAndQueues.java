package javaChallenges;

import java.util.ArrayList;

public class StacksAndQueues {
    Node top = null;
    private Object Exception;

    public int push(int value) {
        Node newNode = new Node(value);
        if(top == null) {
            top = newNode;
            return value;
        }
        newNode.next = top;
        top = newNode;
        return value;
    }

    public int pop() throws Throwable {
        if(top == null) throw (Throwable) Exception;
        int value = top.value;
        top = top.next;
        return value;
    }

    public int peek() throws Throwable {
        if(top == null) throw (Throwable) Exception;
        return top.value;
    }

    public boolean isEmpty() {
        return top == null;
    }

    public String toString(StacksAndQueues stack) {
        return toString(stack.top);
    }


    public String toString(Node current) {
        if (current == null) {
            return "null";
        } else {
            return String.format("{%d} -> {%s}", current.value, toString(current.next));
        }
    }
}

