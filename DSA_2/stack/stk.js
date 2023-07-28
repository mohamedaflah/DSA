//                         ___________________________________________
//                        |                                          |
//                        |      Stack Followed Principle is LIFO    |
//                        |   First in First Out Principle in Stack  |
//                        |__________________________________________|

class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size(){
    return this.items.length;
  }
  print(){
    console.log(this.items.toString());
  }
}
const obj=new Stack();
obj.push(10)
obj.push(20)
obj.push(30)
obj.push(40)
obj.push(50)
obj.push(70)
obj.push(80)
obj.print()
// obj.pop()
obj.print()
console.log(obj.peek());
