class List {
  head;
  tail;
  length;
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length=1;
  }
  insertData(NodeData){
    let newNode={
        value:NodeData,
        next:null
    }
    this.tail.next=newNode;
    this.tail=newNode;
    this.length++;
  }
} 
let list = new List(20);
list.insertData(200)
list.insertData(400)
list.insertData(500)
list.insertData(600)
list.insertData(700)

console.log(list);
