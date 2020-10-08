package tree;

public class Node<T> {

    T value;
    Node left = null;
    Node<T> right = null;

    public Node(T value) {
        this.value = value;
    }

    public Node() {}
}
