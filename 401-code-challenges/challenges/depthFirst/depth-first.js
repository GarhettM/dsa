const util = require('util');
const { start } = require('repl');


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

  get(startVertex) {
    if (!this.adList.has(startVertex)) {
      console.log('Invalid Vertex');
    }
    return [...this.adList.get(startVertex)];
  }

  depthfirst(startVertex) {
    let vertex = this.get(startVertex)
    const output = []
    const visited = new Set();

    output.push(vertex)
    visited.add(vertex)
    
    if (vertex.length) {
      for (let i = 0; i < vertex.length; i++)  {
        
        if(visited.has(!vertex[i].vertex)) {
          console.log(this.get(vertex[i].value))
        }
      }
    }
  }
}

const graph = new Graph();

const a = graph.addVertex('a')
const b = graph.addVertex('b')
const c = graph.addVertex('c')
const d = graph.addVertex('d')
const e = graph.addVertex('e')
const f = graph.addVertex('f')
const g = graph.addVertex('g')
const h = graph.addVertex('h')

graph.addEdge(a, b)
graph.addEdge(a, d)
graph.addEdge(b, c)
graph.addEdge(b, d)
graph.addEdge(c, g)
graph.addEdge(d, e)
graph.addEdge(d, f)
graph.addEdge(d, h)
graph.addEdge(h, f)

console.log(graph.depthfirst(a))



