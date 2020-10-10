'use strict';

class Node {
  constructor(animal)  {
    this.value = animal;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.rear = null;
    this.front = null;
  }

  enqueue(animal) {
    let newAnimal = new Node(animal)

    this.rear ? (this.rear.next = newAnimal) : (this.front = newAnimal)


    // if(this.rear) {
    //   this.rear.next = newAnimal;
    // } else {
    //   this.front = newAnimal
    // }
  }
}