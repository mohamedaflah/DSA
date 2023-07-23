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
  insAtend(value) {
    let nod = new node(value);
    if (this.head == null) {
      this.head = nod;
    } else {
      let current = this.head;

      //  Iterate to end of the list
      while (current.next) {
        current = current.next;
      }
      current.next = nod;
    }
    this.size++;
  }
  displayValue() {
    let str = ``;
    let current = this.head;
    if (this.head == null) {
      console.log(`Your List is Empty`);
    } else {
      while (current) {
        str += `${current.value} `;
        current = current.next;
      }
      console.log(str);
      console.log(`Size of Your List is ${this.size}`);
    }
  }
  insertWithIdx(value, index) {
    let nod = new node(value);
    if (index < 0 || index > this.size) {
      console.log(`Your Index not Available`);
    } else {
      if (index == 0) {
        nod.next = this.head;
        this.head = nod;
      } else {
        let curr = this.head,
          prev;
        let count = 0;
        while (count < index) {
          count++;
          prev = curr;
          curr = curr.next;
        }

        nod.next = curr;
        prev.next = nod;
      }
    }
    this.size++;
  }
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      console.log(`Your Entered Posistion is Not Available`);
    } else {
    }
  }
}
const LinkLis = new LinkedList();
LinkLis.insAtend(10);
LinkLis.insAtend(20);
LinkLis.insAtend(30);
LinkLis.insAtend(40);
LinkLis.insAtend(50);
LinkLis.insertWithIdx(230, 4);
LinkLis.displayValue();
