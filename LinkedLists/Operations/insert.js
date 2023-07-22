
   //                               Basic Operations  in this program
  //                               ____________________________________

  //                                1.Insert at Begining
  //                                2.Traversal


class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  isEmpty() {
    return this.length == 0;
  }
  Insert(value) {
    const nd = new node(value);
    if (this.isEmpty()) {
      this.head = nd;
    } else {
      nd.next = this.head;
      this.head = nd;
    }
    this.length++;
  }
  print() {
    let str = "";
    if (this.isEmpty()) {
      console.log("Your List is Empty");
    } else {
      let current = this.head;
      while (current) {
        str += current.value+' ';
        current = current.next;
      }
    }
    console.log(str);
  }
}
const Ad = new LinkedList();
Ad.Insert(10);
Ad.Insert(20);
Ad.Insert(30);
Ad.Insert(40);
Ad.print();
