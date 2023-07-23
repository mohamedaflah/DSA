class node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}
class Doubly {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addEnd(value) {
    let nd = new node(value);
    if (this.head == null) {
      this.head = nd;
      this.tail = nd;
    } else {
      nd.prev = this.tail;
      this.tail.next = nd;
      this.tail = nd;
    }
  }
  addBegining(value){
    let nd=new node(value);
    if(this.head==null){
      this.head=nd;
      this.tail=nd
    }else{
      nd.next=this.head;
      this.head.prev=nd;
      this.head=nd
    }
  }
  printList(){
    if(this.head==null){
        console.log(`Your List is Empty`);
    }
    let current=this.head;
    let str=``;
    while(current){
        str+=`${current.value} `;
        current=current.next
    }
    console.log(str);
  }
  Revers(){
    let current=this.tail;
    let str=``;
    while(current){
      str+=`${current.value} `
      current=current.prev
    }
    console.log(str);
  }
}
const doubly=new Doubly()
doubly.addEnd(10)
doubly.addEnd(20)
doubly.addEnd(30)
doubly.addBegining(239)
doubly.printList()
doubly.Revers()