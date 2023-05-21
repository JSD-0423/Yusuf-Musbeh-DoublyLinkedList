
const Node = require("./node");

module.exports = class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(null, value, null);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return true;
    }

    newNode.previousNode = this.tail;
    this.tail.nextNode = newNode;
    this.tail = newNode;
    this.length++;
    return true;
  }
  pop() {
    if (!this.head) return null;
    const poppedValue = this.tail;
    this.tail = this.tail.previousNode;
    this.tail.nextNode = null;
    this.length--;
    return poppedValue;
  }

  shift() {
    if (!this.head) return null;
    const shiftedValue = this.head;
    this.head = this.head.nextNode;
    this.head.previousNode = null;
    this.length--;
    return shiftedValue;
  }

  unshift(value) {
    const newNode = new Node(null, value, null);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return true;
    }
    newNode.nextNode = this.head;
    this.head.previousNode = newNode;
    this.head = newNode;
    this.length++;
    return true;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return currentNode;
  }
  set(index, value) {
    let currentNode = this.get(index);
    if (!currentNode) throw new Error("index out of range");
    currentNode.value = value;
    return true;
  }

  insert(index, value) {
    if (index == 0) return this.unshift(value);
    if (index == this.length) return this.push(value);
    let currentNode = this.get(index);
    if (!currentNode) throw new Error("index out of range");
    let newNode = new Node(null, value, null);
    newNode.previousNode = currentNode.previousNode;
    newNode.nextNode = currentNode;
    currentNode.previousNode.nextNode = newNode;
    currentNode.previousNode = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();
    let currentNode = this.get(index);
    if (!currentNode) throw new Error("index out of range");
    currentNode.previousNode.nextNode = currentNode.nextNode;
    currentNode.nextNode.previousNode = currentNode.previousNode;
    currentNode.nextNode = null;
    currentNode.previousNode = null;
    this.length--;
    return true;
  }
  display() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.nextNode;
    }
  }
};
