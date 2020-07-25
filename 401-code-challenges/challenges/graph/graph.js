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

  addEdge(startVertex, endVertex) {
    if (!this.adList.has(startVertex) || !this.adList.has(endVertex)) {
      console.log('no verteces')
    }

    const edges = this.adList.get(startVertex);
    edges.push(new Edge(endVertex, 0))
  }

  getNeighbors(vertex) {
    if (!this.adList.has(vertex)) {
      console.log('invalid!')
    }

    return [...this.adList.get(vertex)]
  }

  breadthFirst(startVertex) {
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);

    while (queue.length) {
      const current = queue.shift();
      console.log(current)
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
  }

  size() {
    return `Graph has ${this.count} verteces`;
  }
}

const graph = new Graph();


const one = graph.addVertex(1)
const two = graph.addVertex(2)
const four = graph.addVertex(4)

graph.addEdge(one, two);
graph.addEdge(two, four);
graph.addEdge(one, four);


console.log(util.inspect(graph.breadthFirst(one), false, null, true))