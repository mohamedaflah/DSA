class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insetAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }
}
class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
const li = new LinkedList();
li.insetAtHead(10);
li.insetAtHead(20);

console.log(li);