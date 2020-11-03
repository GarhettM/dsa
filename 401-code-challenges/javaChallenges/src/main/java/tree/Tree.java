package tree;

import java.util.ArrayList;


public class Tree<T extends Comparable> {
    Node<T> root = null;
    int maxValue = 0;
    ArrayList<Node> tempArr = new ArrayList<>();
    ArrayList<T> finalArr = new ArrayList<>();

    public static void main(String[] args) {
        Tree<Integer> newTree = new Tree<>();
        newTree.root = new Node<>(1);
        newTree.root.left = new Node<>(2);
        newTree.root.right = new Node<>(3);
        newTree.root.left.left = new Node<>(4);
        newTree.root.left.right = new Node<>(5);
        newTree.root.left.right.left = new Node<>(9);
        newTree.root.left.left.left = new Node<>(15);

        Tree<String> testing = newTree.fizzBuzz(newTree.root);
        testing.orderHelper(testing.root, "preOrder");
    }

    public String orderHelper(Node<T> root, String order) {
        ArrayList<Integer> newArr = new ArrayList<>();

        switch (order) {
            case "preOrder":
                return preOrder(root, newArr);

            case "postOrder":
                return postOrder(root, newArr);

            case "inOrder":
                return inOrder(root, newArr);

            default:
                return "Wrong order";
        }
    }

    public String preOrder(Node<T> root, ArrayList arr) {

        arr.add(root.value);

        if(root.left != null) {
            preOrder(root.left, arr);
        }
        if(root.right != null) {
            preOrder(root.right, arr);
        }
        return arr.toString();
    }

    public String postOrder(Node<T> root, ArrayList arr) {

        arr.add(root.value);

        if(root.right != null) {
            postOrder(root.right, arr);
        }
        if(root.left != null) {
            postOrder(root.left, arr);
        }
        return arr.toString();
    }

    public String inOrder(Node<T> root, ArrayList arr) {

        if(root.left != null) {
            inOrder(root.left, arr);
        }

        arr.add(root.value);

        if(root.right != null) {
            inOrder(root.right, arr);
        }
        return arr.toString();
    }

    public int findMaxValue(Node<T> root) {
        T rootValue = (T) root.value;
        if(rootValue.compareTo(maxValue) > 0) maxValue = (int) rootValue;
        if(root.left != null) findMaxValue(root.left);
        if(root.right != null) findMaxValue(root.right);

        return maxValue;
    }

    public boolean isSearchTree(Node<T> root) {
        T rootValue = (T) root.value;
        if(root.left != null) {
            T leftValue = (T) root.left.value;
            if(leftValue.compareTo(rootValue) > 0) {
                return false;
            }
            return isSearchTree(root.left);
        }
        if(root.right != null) {
            T rightValue = (T) root.right.value;
            if(rightValue.compareTo(rootValue) < 0) {
                return false;
            }
            return isSearchTree(root.right);
        }
        return true;
    }

    public ArrayList<T> breadthFirst(Node<T> root) {

        tempArr.add(root);
        bFHelper();

        return finalArr;
    }

    private void bFHelper() {

        if(tempArr.size() > 0) {
            Node temp = tempArr.get(0);
            if(temp.left != null) {
                tempArr.add(temp.left);
            }
            if(temp.right != null) {
                tempArr.add(temp.right);
            }
            finalArr.add((T)temp.value);
            tempArr.remove(0);
            bFHelper();
        }
    }

    public Tree<String> fizzBuzz(Node root) {
        Tree<String> fizzTree = new Tree<>();

        fizzTree.root = new Node<>();
        fizzHelper(root, fizzTree.root);

        return fizzTree;
    }

    public void fizzHelper(Node root, Node rootS) {
        int value = (int) root.value;

        if(value % 3 == 0 && value % 5 == 0) {
            rootS.value = "FizzBuzz";
        } else if(value % 5 == 0) {
            rootS.value = "Buzz";
        } else if(value % 3 == 0) {
            rootS.value = "Fizz";
        } else {
            rootS.value = String.format("%d", root.value);
        }

        if(root.left != null) {

          rootS.left = new Node<>("");
            fizzHelper(root.left, rootS.left);
        }

        if(root.right != null) {
            rootS.right = new Node<>("");
            fizzHelper(root.right, rootS.right);
        }
    }

    public Node<T> getRoot() {
        return root;
    }

    public int getMaxValue() {
        return maxValue;
    }

    public ArrayList<Node> getTempArr() {
        return tempArr;
    }

    public ArrayList<T> getFinalArr() {
        return finalArr;
    }
}
