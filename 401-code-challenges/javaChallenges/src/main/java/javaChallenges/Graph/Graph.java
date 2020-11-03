package javaChallenges.Graph;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Set;

public class Graph<T> {
    ArrayList<GraphNode<T>> vertices;

    public static void main(String[] args) {
        Graph<String> graph = new Graph<>();
        graph.addNode("Seattle");
        graph.addNode("Everett");
        graph.addNode("Bellevue");
        graph.addNode("Tacoma");
        System.out.println(graph.toString());
    }

    public void addEdge(GraphNode<T> nodeStart, GraphNode<T> nodeEnd) {
        Edge<T> edge1 = new Edge<>(nodeStart, nodeEnd);
        nodeStart.edges.add(edge1);

        Edge<T> edge2 = new Edge<>(nodeEnd, nodeStart);
        nodeEnd.edges.add(edge2);
    }

    public void addNode(T value) {
        GraphNode<T> newNode = new GraphNode<>(value);
        vertices.add(newNode);
    }

    public ArrayList<String> getNeighbors(GraphNode<T> node) {
        ArrayList<String> neighbors = new ArrayList<>();
        Set<Edge> edges = node.getEdges();
        Iterator<Edge> it = edges.iterator();
        while (it.hasNext()) {
            neighbors.add((String) it.next().destination.getValue());
        }
        return neighbors;
    }

    @Override
    public String toString() {
        return "Graph{" +
                "vertices=" + vertices +
                '}';
    }
}
