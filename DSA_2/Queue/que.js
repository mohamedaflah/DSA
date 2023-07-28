//                         ___________________________________________
//                        |                                          |
//                        |      Queue Followed Principle is FIFO    |
//                        |   First in First Out Principle in Queue  |
//                        |__________________________________________|
class Queue {
  constructor() {
    this.items = [];
  }
  insertVal(value) {
    this.items.unshift(value);
  }
  display() {
    console.log(this.items.toString());
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  DelFirst() {
    return this.items.shift();
  }
  DelEnd() {
    return this.items.pop();
  }
}
const queue = new Queue();
queue.insertVal(10);
queue.insertVal(20);
queue.insertVal(30);
queue.insertVal(40);
queue.insertVal(50);
queue.insertVal(60);
queue.display();
console.log(`Size of Your Queue is :${queue.size()}`);
console.log(`Your Queue Empty Status ${queue.isEmpty()}`);
console.log(`Value Deleted at End of the Queue ${queue.DelEnd()}`);
queue.display();

console.log(`Value Deleted at the Begining of the Queue ${queue.DelFirst()}`);
queue.display();
