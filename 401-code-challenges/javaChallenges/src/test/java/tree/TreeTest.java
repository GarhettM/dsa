package tree;

import org.junit.Test;

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
}
