class node {
  // Define a node for the Linked list
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Define the stack with Linked List Implementation
class Stack {
  constructor() {
    this.size = 0; // keep traks of the number of elements in stack
    this.top = null; // Point to the node in the stackk
  }

  // Push an Element onto the top of the stack
  push(data) {
    let newStk = new node(data);
    newStk.next = this.top;
    this.top = newStk;
    this.size++;
  }

  // Delete an Element on the top of the stack
  pop() {
    if (!this.top) {
      return null;
    }
    const poppedData = this.top.data;
    this.top = this.top.next;
    this.size--;
    return poppedData;
  }

  // Return the top element in stack without removing
  peek() {
    return this.top ? this.top.data : null;
  }

  // Return Empty Status in stack  True : False
  isEmpty() {
    return this.size === 0;
  }

  // Return size of the stack
  getSize() {
    return this.size;
  }
}

const stak = new Stack();
stak.push(10);
stak.push(20);
stak.push(30);
stak.push(40);
stak.push(50);
console.log(stak.pop());
console.log(stak.peek());
console.log(stak.isEmpty());
console.log(stak.getSize());
