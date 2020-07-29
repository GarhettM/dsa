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
    for (let [key] of this.adList) {
      if (key.value === start) {
        const edges = this.adList.get(key)
        edges.push(new Edge(end, price))
      }
    }
  }

  getRoute(arr) {
    let price = 0;
    let toggle = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (toggle) {
        for (let [key, value] of this.adList) {
          if (key.value === arr[i]) {
            for (let j = 0; j < value.length; j++) {
              if (value[j].destination === arr[i + 1]) {
                price += value[j].price;
                toggle = true;
                break;
              }
              toggle = false;
            }
          }
        } 
      } else {
        return `${false} $0`;
      }
    }
    if (price !== 0) {
      return `${true} $${price}`
    }
  }

  size() {
    return `Graph has ${this.count} verteces`;
  }
}

const graph = new Graph();

const cities = ['Pandora', 'Arendelle', 'Monstropolis', 'Naboo', 'Metroville', 'Narnia'];

graph.addCities(cities)
graph.addRoute('Pandora', 'Arendelle', 150);
graph.addRoute('Arendelle', 'Monstropolis', 42);
graph.addRoute('Monstropolis', 'Naboo', 73)
graph.addRoute('Metroville', 'Arendelle', 99);
graph.addRoute('Metroville', 'Pandora', 82);
graph.addRoute('Metroville', 'Naboo', 26);
graph.addRoute('Metroville', 'Narnia', 37);
graph.addRoute('Metroville', 'Monstropolis', 105);
graph.addRoute('Naboo', 'Monstropolis', 73);
graph.addRoute('Narnia', 'Naboo', 250);

console.log(graph.getRoute(['Metroville', 'Pandora']))
console.log(graph.getRoute(['Arendelle', 'Monstropolis', 'Naboo']))
console.log(graph.getRoute(['Naboo', 'Pandora']))
console.log(graph.getRoute(['Narnia', 'Arendelle', 'Naboo']))





module.exports = {
  Vertex,
  Edge,
  Graph,
}


