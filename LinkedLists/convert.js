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
  AddVal(value) {
    let nd = new node(value);
    if (this.isEmpty()) {
      this.head = nd;
    } else {
      nd.next = this.head;
      this.head = nd;
    }
    this.length += 1;
  }
  print() {
    let str='';
    if (this.isEmpty()) {
      console.log("Your List is Empty");
    } else {
      let current = this.head;
      while (current) {
        str+=current.value+'->';
        current = current.next;
      }
    }
    console.log(str);
    console.log("Length of Your List is :",this.length)
  }
}
const lis = new LinkedList();

const Ar=[10,20,30,40,50,60];
for(let i=0;i<Ar.length;i++){
  lis.AddVal(Ar[i]);
}

lis.print();