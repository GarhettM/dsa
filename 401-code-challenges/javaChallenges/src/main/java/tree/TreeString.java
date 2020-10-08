package tree;

import java.util.ArrayList;

public class TreeString {

    NodeString root = null;


    public static void main(String[] args) {

    }
    public String orderHelper(NodeString root, String order) {
        ArrayList<String> newArr = new ArrayList<>();

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

    public String preOrder(NodeString root, ArrayList arr) {

        arr.add(root.value);

        if(root.left != null) {
            preOrder(root.left, arr);
        }
        if(root.right != null) {
            preOrder(root.right, arr);
        }
        return arr.toString();
    }

    public String postOrder(NodeString root, ArrayList arr) {

        arr.add(root.value);

        if(root.right != null) {
            postOrder(root.right, arr);
        }
        if(root.left != null) {
            postOrder(root.left, arr);
        }
        return arr.toString();
    }

    public String inOrder(NodeString root, ArrayList arr) {

        if(root.left != null) {
            inOrder(root.left, arr);
        }

        arr.add(root.value);

        if(root.right != null) {
            inOrder(root.right, arr);
        }
        return arr.toString();
    }
}
