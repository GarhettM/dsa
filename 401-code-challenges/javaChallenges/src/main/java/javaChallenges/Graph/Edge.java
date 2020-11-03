package javaChallenges.Graph;

public class Edge<T> {
    GraphNode<T> origin;
    GraphNode<T> destination;

    public Edge(GraphNode<T> origin, GraphNode<T> destination) {
        this.origin = origin;
        this.destination = destination;
    }
}
