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
