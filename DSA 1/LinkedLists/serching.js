class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class List {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  setValue(value) {
    let mynode = new node(value);
    if (this.isEmpty()) {
      this.head = mynode;
    } else {
      mynode.next = this.head;
      this.head = mynode;
    }
    this.size++;
  }
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }
  display() {
    if (this.isEmpty()) {
      console.log(`Your List is Empty`);
    } else {
      let current = this.head;
      let str = "";
      while (current) {
        str += `${current.value} ->`;
        current = current.next;
      }
      console.log(str);
    }
  }
}
const li = new List();
li.setValue(10);
li.display();
let v=li.search(10)
console.log(v);


