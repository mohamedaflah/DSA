class Stack {
  constructor() {
    this.stk = [];
  }
  insert(value) {
    this.stk.push(value);
  }
  pop() {
   return this.stk.pop();
  }
  display(){
    console.log(this.stk.toString());
  }
}

const stack=new Stack();
stack.insert(29)
stack.insert(24)
stack.insert(12)
stack.insert(43)
stack.insert(63)
stack.display()
let end=stack.pop()
console.log(`After Deleting End value ${end}`);
stack.display()