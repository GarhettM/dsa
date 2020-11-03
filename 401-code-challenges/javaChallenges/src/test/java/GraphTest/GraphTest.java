package GraphTest;


import javaChallenges.Graph.Graph;
import org.junit.Test;
import static org.junit.Assert.*;

public class GraphTest {
    @Test public void testGraphs() {
        Graph<String> graph = new Graph<>();

        graph.addNode("Seattle");
        graph.addNode("Everett");
        graph.addNode("Bellevue");
        graph.addNode("Tacoma");
        System.out.println(graph.toString());
        assertEquals("This is what it is.", graph.toString(), "This is waht it will be");
    }
}
