class node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //   Insert First Node
  insertFirst(data) {
    this.head = new node(data, this.head);
  }

  //   Printing Data
  printListData() {
    let current = this.head;

    while (current) {
        console.log(current.data);
        current=current.next;
    }
  }
}
const ins = new List();
ins.insertFirst(100);
ins.insertFirst(200);
ins.insertFirst(300);
ins.printListData()
