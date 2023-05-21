const DoublyLinkedList = require("./doublyLinkedList");

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(4);
doublyLinkedList.push(5);
console.log("testing pushing elements:")
doublyLinkedList.display();

doublyLinkedList.unshift(1)
console.log("Testing unshift 1");
doublyLinkedList.display();

doublyLinkedList.pop()
console.log("Testing popping:");
doublyLinkedList.display();

doublyLinkedList.shift()
console.log("Testing shifting:");
doublyLinkedList.display();

doublyLinkedList.set(1,1)
console.log("Testing set 1 in index 1:");
doublyLinkedList.display();

doublyLinkedList.insert(2,2)
console.log("Testing inserting new node in index 2:");
doublyLinkedList.display();

doublyLinkedList.remove(3)
console.log("Testing removing element at index 3:");
doublyLinkedList.display();
