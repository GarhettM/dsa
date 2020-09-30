package javaChallenges;

import java.util.EmptyStackException;

public class StacksAndQueues<G> {
    public NodeG<G> topG = null;
    private Object Exception;

    public String toString(StacksAndQueues stack) {
        return toString(stack.topG);
    }


    public String toString(NodeG current) {
        if (current == null) {
            return "null";
        } else {
            return String.format("{%s} -> {%s}", current.value, toString(current.next));
        }
    }

    //============= This starts the generic stuff ==================
    public static class NodeG <G> {
        G value;
        NodeG<G> next = null;

        public NodeG(G value) {
            this.value = value;
        }

        public NodeG(G value, NodeG<G> next) {
            this.value = value;
            this.next = next;
        }
    }

    public void pushG(G value) {
        if(topG == null) {
            this.topG = new NodeG<G>(value);
        } else {
            this.topG = new NodeG<G>(value, this.topG);
        }
    }

    public G popG() {
        if(this.topG == null) {
            throw new EmptyStackException();
        } else {
            G value = this.topG.value;
            if(topG.next == null) {
                topG = null;
            } else {
                topG = topG.next;
            }
            return value;
        }
    }

    public G peekG() {
        return this.topG.value;
    }

    public boolean isEmpty() {
        if(this.topG == null) {
            return true;
        }
        return false;
    }
}

