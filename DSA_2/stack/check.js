class Stack {
  constructor() {
    this.stak = [];
  }
  insert(value) {
    this.stak.push(value);
  }
  isEmpty() {
    return this.stak.length === 0;
  }
}
const s = new Stack();
// s.insert(10);
// s.insert(20);
// s.insert(30);
// s.insert(40);
// s.insert(50);
// s.insert(60);
// s.insert(70);
if (s.isEmpty()) {
  console.log(`Your Stack is Empty`);
} else {
  console.log(`Datas Available on Your Stack`);
}
