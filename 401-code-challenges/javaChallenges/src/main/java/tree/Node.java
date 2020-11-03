package tree;

public class Node<T> {

    public T value;
    public Node left = null;
    public Node<T> right = null;

    public Node(T value) {
        this.value = value;
    }

    public Node() {}

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }

    public Node getLeft() {
        return left;
    }

    public void setLeft(Node left) {
        this.left = left;
    }

    public Node<T> getRight() {
        return right;
    }

    public void setRight(Node<T> right) {
        this.right = right;
    }
}
