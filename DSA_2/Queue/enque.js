class Queue{
    constructor() {
        this.items=[]
    }
    insert(value){
        this.items.unshift(value);
    }
    enqueue(value){
        this.items.push(value)
    }
    display(){
        console.log(this.items.toString());
    }
}
const obj=new Queue();
obj.insert(23)
obj.insert(63)
obj.insert(56)
obj.insert(20)
obj.insert(52)
obj.enqueue(90)
obj.display()