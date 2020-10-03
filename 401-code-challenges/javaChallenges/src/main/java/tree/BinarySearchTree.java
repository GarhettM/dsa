package tree;

public class BinarySearchTree {
    Node root = null;
    private Object EmptyStackException;


    public static void main(String[] args) {
        BinarySearchTree newTree = new BinarySearchTree();
        newTree.add(newTree.root,6);
        newTree.add(newTree.root,3);
        newTree.add(newTree.root,9);
        newTree.add(newTree.root,7);
        newTree.add(newTree.root,4);
        System.out.println(newTree.contains(newTree.root, 10));
    }

    public void add(Node root, int value) {
        if(root == null) {
            setRoot(new Node(value));
        } else {

            if (value < root.value) {
                if (root.left == null) {
                    root.left = new Node(value);
                }
                add(root.left, value);
            }
            if (value > root.value) {
                if (root.right == null) {
                    root.right = new Node(value);
                }
                add(root.right, value);
            }
        }
    }

    public boolean contains(Node root, int value) {

        if(value == root.value) {
            System.out.println("asdfg");
            return true;
        }
        if(root.left != null) {
           contains(root.left, value);
        }
        if(root.right != null) {
            contains(root.right, value);
        }
        return false;
    }

    public String toString() {
        return toString(this.root, "");
    }


    public String toString(Node current, String conCat) {
        if(current.left != null) {
            conCat = toString(current.left, conCat);
        }

        conCat = String.format("{%d} -> {%s}", current.value, conCat);

        if(current.right != null) {
            conCat = toString(current.right, conCat);
        }

        return conCat;
    }


    public void setRoot(Node root) {
        this.root = root;
    }
}
