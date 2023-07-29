class node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  enqueue(value) {
    let newNode = new node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  Dequeue(){
    this.head=this.head.next;
    this.size--;
  }
  addValue(value) {
    let newNode = new node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }
  print() {
    let str = ``;
    let current = this.head;
    if (this.isEmpty()) {
      console.log(`Your Queue is Empty`);
    } else {
      while (current) {
        str += `${current.value} `;
        current = current.next;
      }
      console.log(str);
    }
  }
}
const que=new Queue();
que.addValue(78)
que.addValue(32)
que.addValue(45)
que.addValue(33)
que.addValue(32)
que.addValue(47)
que.enqueue(230)
que.Dequeue()
que.print();