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
              };
              toggle = false;
            };
          };
        } ;
      } else {
        return `${false} $0`;
      };
    };
    if (price !== 0) {
      return `${true} $${price}`
    };
  };
};

module.exports = {
  Vertex,
  Edge,
  Graph,
}


