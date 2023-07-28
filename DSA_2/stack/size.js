class Stack{
    constructor(){
        this.items=[];
    }
    insertion(value){
        this.items.push(value)
    }
    findSize(){
        return this.items.length;
    }
    print(){
        console.log(this.items.toString());
    }
}
const sk=new Stack();
sk.insertion(90)
sk.insertion(10)
sk.insertion(65)
sk.insertion(56)
sk.insertion(42)
sk.insertion(41)
sk.print()
console.log(`Size of you Stack is ${sk.findSize()}`);