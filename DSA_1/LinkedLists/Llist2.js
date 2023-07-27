class Nodes {
  constructor(value) {
    this.value = 0;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  isEmpty() {
    return this.length === 0;
  }
  getLength() {
    return this.length;
  }
  Append(value) {
    let node = new Nodes();
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }
  display() {
    if (this.isEmpty()) {
      console.log(`Your List is Empty`);
    } else {
      let curr = this.head;
      let listValue = "";
      while(curr){
        listValue+=`${curr.value}`
        curr=curr.next
      }
      console.log(listValue)
    }
  }
}
const list = new LinkedList();
console.log(`List is Emply ${list.isEmpty()}`);
console.log(`Length is :${list.length}`);
list.Append(10);
list.Append(20);
list.Append(30);
list.display()
