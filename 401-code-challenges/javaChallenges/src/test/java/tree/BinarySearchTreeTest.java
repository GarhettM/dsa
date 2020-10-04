package tree;

import org.junit.Test;
import static org.junit.Assert.*;

public class BinarySearchTreeTest {

    @Test
    public void testBTInstanceTest() {
        BinarySearchTree newTree = new BinarySearchTree();

        newTree.add(newTree.root,6);
        newTree.add(newTree.root,3);
        newTree.add(newTree.root,9);
        newTree.add(newTree.root,7);
        newTree.add(newTree.root,4);

        assertEquals("The inOrder Binary Search tree should be {9} -> {{7} -> {{6} -> {{4} -> {{3} -> {}}}}}", "{9} -> {{7} -> {{6} -> {{4} -> {{3} -> {}}}}}", newTree.toString());
        assertTrue("should be true", newTree.contains(newTree.root, 9));
    }
}
