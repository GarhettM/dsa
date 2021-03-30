package challenges;

public class LinkedList {
    public Node head = null;

    public String insert(int value) {
        Node node = new Node(value);
        if (this.head != null) {
            node.next = this.head;
        }
        this.head = node;
        return "Node Inserted";
    }

    public boolean includes(int value) {
        Node current = this.head;

        while(current != null) {
            if(current.value == value) {
                System.out.println("Value Found!");
                return true;
            }
            current = current.next;
        }
        System.out.println("Value not found!");
        return false;
    }

    public void append(int value) {
        Node node = new Node(value);
        Node current = this.head;

        while(current != null) {
            if(current.next == null) {
                current.next = node;
                break;
            }
            current = current.next;
        }
        System.out.println("Node added to the end.");
    }

    public void insertBefore(int value, int ref) {
        Node node = new Node(value);
        Node current = this.head;

        while(current != null) {
            if(current.next.value == ref) {
                Node temp = current.next;
                current.next = node;
                current.next.next = temp;
                break;
            }
            current = current.next;
        }

        System.out.println(String.format("Node with value (%d) inserted before Node with value (%d).", value, ref));
    }

    public void insertAfter(int value, int ref) {
        Node node = new Node(value);
        Node current = this.head;

        while(current != null) {
            if(current.value == ref) {
                Node temp = current.next;
                current.next = node;
                current.next.next = temp;
                break;
            }
            current = current.next;
        }
        System.out.println(String.format("Node (%d) inserted after Node (%d).%n", value, ref));
    }

    public String toString() {
        Node current = this.head;

        String finalString = "HEAD -> ";

        while(current != null) {
            finalString = String.format("%s %s -> ", finalString, current.value);
            current = current.next;
        }

        finalString = String.format("%s NULL", finalString);
        System.out.println(finalString);
        return finalString;
    }
}

class Node {
    public int value;
    Node next = null;

    public Node(int value) {
        this.value = value;
    }
}
