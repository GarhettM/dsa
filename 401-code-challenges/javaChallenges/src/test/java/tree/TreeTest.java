package tree;

import org.junit.Test;
import java.util.Arrays;

import static org.junit.Assert.*;

public class TreeTest {

    @Test
    public void testTreeInstance() {
        Tree newTree = new Tree();

        assertNotNull("This tree should not be null", newTree);
        assertNull("This tree root should be null.", newTree.root);
    }

    @Test
    public void testTreeOrders() {
        Tree newTree = new Tree();
        newTree.root = new Node(1);
        newTree.root.left = new Node(2);
        newTree.root.right = new Node(3);
        newTree.root.left.left = new Node(4);
        newTree.root.left.right = new Node(5);
        newTree.root.right.left = new Node(6);
        newTree.root.right.right = new Node(7);

        assertEquals("The 'pre order' of this tree should be [1, 2, 4, 5, 3, 6, 7]", "[1, 2, 4, 5, 3, 6, 7]", newTree.orderHelper(newTree.root, "preOrder"));
        assertEquals("The 'post order' of this tree should be [1, 3, 7, 6, 2, 5, 4]", "[1, 3, 7, 6, 2, 5, 4]", newTree.orderHelper(newTree.root, "postOrder"));
        assertEquals("The 'in order' of this tree should be [4, 2, 5, 1, 6, 3, 7]", "[4, 2, 5, 1, 6, 3, 7]", newTree.orderHelper(newTree.root, "inOrder"));
        assertEquals("If the wrong order is called in helper function it should return 'Wrong order.'", "Wrong order", newTree.orderHelper(newTree.root, "Huh?"));

    }

    @Test
    public void testTreeMaxValue() {
        Tree newTree = new Tree();
        newTree.root = new Node(1);
        newTree.root.left = new Node(2);
        newTree.root.right = new Node(3);
        newTree.root.left.left = new Node(4);
        newTree.root.left.right = new Node(5);


        assertEquals("Should return 5 as the max value.", 5, newTree.findMaxValue(newTree.root));

        newTree.root.right.right = new Node(12);
        assertEquals("Should return 12 as the max value.", 12, newTree.findMaxValue(newTree.root));
        assertNotEquals("Should fail", 3, newTree.findMaxValue(newTree.root));

    }

    @Test
    public void testIsSearchtreeValue() {
        Tree newTree = new Tree();
        newTree.root = new Node(1);
        newTree.root.left = new Node(2);
        newTree.root.right = new Node(3);
        newTree.root.left.left = new Node(4);
        newTree.root.left.right = new Node(5);


        assertFalse("Should be false.", newTree.isSearchTree(newTree.root));


        Tree newTree1 = new Tree();
        newTree1.root = new Node(5);
        newTree1.root.left = new Node(2);
        newTree1.root.right = new Node(7);
        newTree1.root.left.left = new Node(1);
        newTree1.root.left.right = new Node(3);
        newTree1.root.right.right = new Node(9);
        newTree1.root.right.left = new Node(6);

        assertTrue("Should be true.", newTree.isSearchTree(newTree1.root));

    }

    @Test
    public void testTheBreadthFirst() {
        Tree newTree = new Tree();
        newTree.root = new Node(1);
        newTree.root.left = new Node(2);
        newTree.root.right = new Node(3);
        newTree.root.left.left = new Node(4);
        newTree.root.left.right = new Node(5);

        assertEquals("The Breadfirst traversal should be [1, 2, 3, 4, 5].", Arrays.asList(1, 2, 3, 4, 5), newTree.breadthFirst(newTree.root));

        Tree newTree1 = new Tree();
        newTree1.root = new Node(4);
        newTree1.root.left = new Node(6);
        newTree1.root.right = new Node(2);
        newTree1.root.left.left = new Node(9);
        newTree1.root.left.right = new Node(4);
        newTree1.root.right.right = new Node(12);
        newTree1.root.left.right.left = new Node(53);

        assertEquals("The Breadfirst traversal should be [4, 6, 2, 9, 4, 12, 53].", Arrays.asList(4, 6, 2, 9, 4, 12, 53), newTree1.breadthFirst(newTree1.root));

    }


}
