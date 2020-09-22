package javaChallenges;

public class LL {
    public Node head = null;
    public Node tail = null;

    public static void main(String [] args) throws Exception{
        LL ll = new LL();
        ll.insert(1);
        ll.insert(2);
        ll.insert(3);
        ll.insert(4);
        System.out.println(ll);
        ll.kthFromEnd(2);
    }

    public String insert(int value) {
        Node node = new Node(value);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        return "Node has been added.";
    }

    public boolean includes(int value) {
        Node current = this.head;
        boolean test = false;

        while (current != null) {
            if (current.value == value) {
                test = true;
            }
            current = current.next;
        }
        return test;
    }

    public String ll_append(int value) {
        Node node = new Node(value);
        this.tail.next = node;
        return "Node has been added to the tail.";
    }

    public void insertBefore(int value, int befVal) {
        Node node = new Node(value);
        Node current = head;

        while (current.next != null) {
            if (current.next.value == befVal) {
                Node temp = current.next;
                current.next = node;
                node.next = temp;
            }
            current = current.next;
        }
    }

    public void insertAfter(int value, int aftVal){
        Node node = new Node(value);
        Node current = head;

        while(current != null) {
            if(current.value == aftVal) {
                Node temp = current.next;
                current.next = node;
                node.next = temp;
            }
            current = current.next;
        }
    }

    public void deleteNode(int value) {
        Node current = head;
        if(current.value == value) {
            head = current.next;
        }

        while (current.next != null) {

            if(current.next.value == value) {
                current.next = current.next.next;
                break;
            }
            current = current.next;
        }
    }

    public int kthFromEnd(int k) throws Exception {
        Node current = head;
        Node current2 = head;
        int count = -k;
        int a = 0;

        while(current != null) {
            if(count >= 0) {
                a = current2.value;
                System.out.println(a);
                current2 = current2.next;
            }
            count++;
            current = current.next;
        }
        if(k < 0) {
            throw new Exception("Your input exceeds the length of the Linked List!");
        }
        return a;
    }

    public String toString() {
        return toString(this.head);
    }


    public String toString(Node current) {
        if (current == null) {
            return "null";
        } else {
            return String.format("{%d} -> {%s}", current.value, toString(current.next));
        }
    }
}

class Node {
    public int value;
    Node next = null;

    public Node(int value) {
        this.value = value;
    }

}