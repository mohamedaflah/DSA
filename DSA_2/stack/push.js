class Stack{
    constructor(){
        this.values=[];
    }
    push(value){
        this.values.push(value);
    }
    print(){
        console.log(this.values.toString());
    }
}
const stk=new Stack();
stk.push(10)
stk.push(40)
stk.push(34)
stk.push(12)
stk.print()