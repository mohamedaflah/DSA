class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(data) {
    const newNode = new node(data);

    if (!this.front) {
      this.front = newNode;
    } else {
      this.rear.next = newNode;
    }

    this.rear = newNode;
    this.size++;
  }

  dequeue() {
    if (!this.front) {
      return null;
    }

    const dequeuedData = this.front.data;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }

    this.size--;
    return dequeuedData;
  }
  peek() {
    return this.front.data;
  }
  isEmpty() {
   return this.size === 0;
  }
  getSize() {
    return this.size;
  }
}

const que=new Queue()
que.enqueue(10)
que.enqueue(20)
que.enqueue(30)
que.enqueue(40)

console.log(que.peek());
console.log(`Empty Status is ${que.isEmpty()}`);
console.log(`Dequed data ${que.dequeue()}`);
console.log("size is :"+que.getSize());
