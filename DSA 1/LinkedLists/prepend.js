class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  perpend(value) {
    const nd = new node(value);
    if (this.isEmpty()) {
      this.head = nd;
    } else {
      nd.next = this.head;
      this.head = nd;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Your List is Empty");
    } else {
      let current = this.head;
      let str = "";
      while (current) {
        str += `${current.value} -> `;
        current = current.next;
      }
      console.log(str);
    }
  }
}
const lnk = new LinkedList();
lnk.perpend(10);
lnk.perpend(20);
lnk.print();
