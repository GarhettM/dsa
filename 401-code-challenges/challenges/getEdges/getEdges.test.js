'use strict';

const testFile = require('./getEdges.js');

const Graph = testFile.Graph;
const Edge = testFile.Edge;
const Vertex = testFile.Vertex

const graph = new Graph();

const cities = ['Seattle', 'Portland', 'Los-Angeles', 'Chicago', 'Denver', 'New-York'];

graph.addCities(cities)

graph.addRoute('Seattle', 'Portland', 220)
graph.addRoute('Seattle', 'Chicago', 340)
graph.addRoute('Portland', 'Chicago', 300)
graph.addRoute('Denver', 'Chicago', 200)
graph.addRoute('New-York', 'Denver', 400)
graph.addRoute('New-York', 'Seattle', 650)
graph.addRoute('Chicago', 'Los-Angeles', 340)
graph.addRoute('Portland', 'Los-Angeles', 190)

describe('This test will test your ability to traverse edges in a graph.', () => {
  it('Write a function called getRoute, based on the specifications above, which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost. If the trip is not possible, it should return false with $0.', () => {

    const flight1 = ['Seattle', 'Portland']
    const flight2 = ['Seattle', 'Chicago', 'Los-Angeles']
    const flight3 = ['Seattle', 'Denver', 'Chicago', 'Los-Angeles']
    expect(graph.getRoute(flight1)).toStrictEqual(`${true} $220`)
    expect(graph.getRoute(flight2)).toStrictEqual(`${true} $680`)
    expect(graph.getRoute(flight3)).toStrictEqual(`${false} $0`)

  })
})