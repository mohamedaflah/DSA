class Node {
  head;
  data;
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}
class LinkList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  insert(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
      this.length++;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
      this.length++;
    }
  }
  deleteData(data) {
    if (this.head == null) {
      return -1;
    }

    let current = this.head;
    let prev = null;
    while (current != null) {
      if (current.data == data) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.length--;
        return current.data;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }
  print() {
    while (this.head != null) {
      console.log(this.head.data);
      this.head=this.head.next
    }
  }
}
var ll=new LinkList();
ll.deleteData(10)
ll.insert(20)

ll.deleteData(10)
ll.print()