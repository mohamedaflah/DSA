class node {
  constructor(value,next=null) {
    this.value = value;
    this.next = next;
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
  prepend(value) {
    const mynode = new node(value);
    if (this.head==null) {
      this.head = mynode;
    } else {
      mynode.next = this.head;
      this.head = mynode;
    }
    this.size++;
  }
  display() {
    let array = [];
    if (this.isEmpty()) {
      console.log(`Sorry Your List is Empty`);
    } else {
      let current = this.head;
      while (current) {
        array.push(current.value);
        current = current.next;
      }
    }
    console.log(array);
  }
  deleteNode(index) {
    //  method 1 for Delete

    let count = 1;
    let main = this.head;
    if (index === 1) {
      this.head = this.head.next;
    } else {
      while (count < index - 1) {
        main = main.next;
        count++;
      }
      let nextNode = main.next.next;
      main.next = nextNode;
    }

  }
  insertNode(value,index){
    let counter=1;
    let currentNode=this.head;
    while(counter>index){
      counter++;
      currentNode=currentNode.next;
    }
    let nextNode= currentNode.next;
    currentNode.next={
      value:value,
      next:nextNode
    }
  }
}
const Llist = new LinkedList();
Llist.prepend(180);
Llist.prepend(120);
Llist.prepend(140);
Llist.prepend(320);
Llist.prepend(420);
Llist.prepend(520);
Llist.display();
Llist.deleteNode(1);
console.log(`After Deleting Your Linked List is `);
Llist.display();
Llist.insertNode(232,2)
