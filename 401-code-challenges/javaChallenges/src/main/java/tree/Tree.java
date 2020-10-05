package tree;

import java.util.ArrayList;

public class Tree {
    Node root = null;
    int maxValue = 0;


    public String orderHelper(Node root, String order) {
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

    public String preOrder(Node root, ArrayList arr) {

        arr.add(root.value);

        if(root.left != null) {
            preOrder(root.left, arr);
        }
        if(root.right != null) {
            preOrder(root.right, arr);
        }
        return arr.toString();
    }

    public String postOrder(Node root, ArrayList arr) {

        arr.add(root.value);

        if(root.right != null) {
            postOrder(root.right, arr);
        }
        if(root.left != null) {
            postOrder(root.left, arr);
        }
        return arr.toString();
    }

    public String inOrder(Node root, ArrayList arr) {

        if(root.left != null) {
            inOrder(root.left, arr);
        }

        arr.add(root.value);

        if(root.right != null) {
            inOrder(root.right, arr);
        }
        return arr.toString();
    }

    public int findMaxValue(Node root) {
        if(root.value > maxValue) maxValue = root.value;
        if(root.left != null) findMaxValue(root.left);
        if(root.right != null) findMaxValue(root.right);

        return maxValue;
    }

}
