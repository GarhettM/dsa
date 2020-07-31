'use strict';

const util = require('util')


class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adList = new Map();
    this.count = 0;
  }

  addVertex(value) {
    this.count++;
    const vertex = new Vertex(value);
    this.adList.set(vertex, []);
    return vertex
  }

  getNodes() {
    this.adList.map(val => {
      return val.a
    });
  }

  addEdge(startVertex, endVertex) {
    if (!this.adList.has(startVertex) || !this.adList.has(endVertex)) {
      console.log('no verteces')
    }

    const edges = this.adList.get(startVertex);
    edges.push(new Edge(endVertex, 0))
    
    edges.push(edges)
  }

  getNeighbors(vertex) {
    if (!this.adList.has(vertex)) {
      return 'invalid!';
    }

    return [...this.adList.get(vertex)]
  }

  breadthFirst(startVertex) {
    const values = [];
    const queue = [];
    const visitedNodes = new Set();
    queue.push(startVertex);
    visitedNodes.add(startVertex);
    
    while (queue.length) {
      const current = queue.shift();
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (visitedNodes.has(edge.vertex)) {
          continue;
        } else {
          visitedNodes.add(edge.vertex)
        }
        queue.push(edge.vertex)
      }
    }
    console.log(visitedNodes)
    visitedNodes.forEach((vertex) => {
      console.log(vertex.value)
      // values.push(vertex.value)
    })
    return values;
  }

  size() {
    return `Graph has ${this.count} verteces`;
  }

}

const graph = new Graph();

const one = graph.addVertex(1);
const two = graph.addVertex(2);
const four = graph.addVertex(4);
const six = graph.addVertex(6);
const seven = graph.addVertex(7);
const eight = graph.addVertex(8);
const ten = graph.addVertex(10);


graph.addEdge(one, two);
graph.addEdge(one, four);
graph.addEdge(two, four);
graph.addEdge(four, six);
graph.addEdge(six, eight);
graph.addEdge(six, ten);

console.log(graph.breadthFirst(one))

// console.log(graph.edges)

module.exports = {
  Vertex,
  Edge,
  Graph,
}