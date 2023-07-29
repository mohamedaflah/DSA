class node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  push(value) {
    let newNode = new node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }
  pop() {
    if (this.isEmpty()) {
      this.head = this.head.next;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
  }
  peek() {
    if (this.isEmpty()) {
      return this.head.value;
    } else {
      return this.tail.value;
    }
  }
  display() {
    let str = ``;
    let current = this.head;
    while (current) {
      str += `${current.value} `;
      current = current.next;
    }
    console.log(str);
  }
}
const stack = new Stack();
stack.push(87);
stack.push(23);
stack.push(54);
stack.push(67);
stack.push(12);
stack.pop();
console.log(`Peek value of Your Stack is ${stack.peek()}`);
stack.display();
