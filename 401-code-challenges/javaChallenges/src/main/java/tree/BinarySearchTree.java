package tree;

public class BinarySearchTree {
    Node root = null;
//    boolean temp = false;
    private Object EmptyStackException;


    public static void main(String[] args) {
        BinarySearchTree newTree = new BinarySearchTree();
        newTree.add(newTree.root,6);
        newTree.add(newTree.root,3);
        newTree.add(newTree.root,9);
        newTree.add(newTree.root,7);
        newTree.add(newTree.root,4);
        System.out.println(newTree.contains(newTree.root, 9));
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
            return true;
        }
        if(value < root.value && root.left != null) {
            return contains(root.left, value);
        } else if(value > root.value && root.right != null) {
            return contains(root.right, value);
        } else {
            return false;
        }
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
