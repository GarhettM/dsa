'use strict';

const graphFile = require('./graph.js');

let Graph = graphFile.Graph;

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
graph.addEdge(seven, ten);

describe('Test your graphing skills.', () => {
  it('This test should return the size of the Graph. Size refering to the number of veterces.', () => {

    expect(graph.size()).toEqual('Graph has 7 verteces')

  })

  it('This test should return the graph breadthfirst starting from the "root". If the root of the breadthfirst method doesn\' exist then it should return "invalid!"', () => {



  })
})