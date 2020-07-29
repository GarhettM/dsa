'use strict';

const util = require('util')


class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(destination, price) {
    this.destination = destination;
    this.price = price;
  }
}

class Graph {
  constructor() {
    this.adList = new Map();
    this.count = 0;
  }

  addCities(value) {
    value.forEach(val => {
      this.count++;
      const vertex = new Vertex(val);
      this.adList.set(vertex, []);
    })
    return this.adList
  }

  addRoute(start, end, price) {
    for ( let [key] of this.adList) {
      if(key.value === start)  {
        const edges = this.adList.get(key)
        edges.push(new Edge(end, price))
      }
    }
  }

  getRoute(arr) {
    let price = 0;
    for(let i = 0; i < arr.length -1; i++) {
      for (let [key, value] of this.adList)  {
        if(key.value === arr[i]) {
          for(let j = 0; j < value.length; j++) {
            if(value[j].destination === arr[i+1])  {
              price += value[j].price
              break;
            }
          }
        }
      }
    }
    if(price === 0) {
      return `${false}, $0`
    } else {
      return `${true} $${price}`
    }
  }



  size() {
    return `Graph has ${this.count} verteces`;
  }
}

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


console.log(graph.getRoute(['Seattle', 'Portland', 'Chicago', 'Los-Angeles']))

