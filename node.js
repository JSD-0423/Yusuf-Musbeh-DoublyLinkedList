module.exports = class Node {
  constructor(previousNode, value, nextNode) {
    this.previousNode = previousNode;
    this.value = value;
    this.nextNode = nextNode;
  }
  toString() {
    return this.value;
  }
};
