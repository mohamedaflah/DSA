class Queue {
  constructor() {
    this.val = [];
  }
  insert(value) {
    this.val.unshift(value);
  }
  getSize() {
    return this.val.length;
  }
  display(){
    console.log(this.val.toString());
  }
}

const qu=new Queue()
qu.insert(10)
qu.insert(20)
qu.insert(40)
qu.insert(50)
qu.display();
console.log(`Size of Queue is ${qu.getSize()}`);