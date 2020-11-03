package javaChallenges;

import org.checkerframework.checker.units.qual.A;
import tree.Node;
import tree.Tree;

import java.util.ArrayList;
import java.util.HashSet;

public class TreeIntersection {

    public ArrayList<Integer> treeIntersection(Tree tree1, Tree tree2) {
        Node treeRoot1 = tree1.getRoot();
        Node treeRoot2 = tree2.getRoot();
        ArrayList<Integer> finalBoss = new ArrayList<>();
        HashSet<Integer> checkMate = new HashSet<>();

        helper(treeRoot1, finalBoss, checkMate);
        helper(treeRoot2, finalBoss, checkMate);

        return finalBoss;
    }

    public void helper (Node root, ArrayList list, HashSet unique) {
        if(unique.add(root.getValue())) {
            list.add(root.getValue());
        }
        if(root.getLeft() != null) {
            helper(root.left, list, unique);
        }
        if(root.getRight() != null) {
            helper(root.right, list, unique);
        }
    }
}
