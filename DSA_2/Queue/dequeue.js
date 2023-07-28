class Queue{
    constructor(){
        this.values=[]
    }
    addValue(v){
        this.values.unshift(v);
    }
    print(){
        console.log(this.values.toString());
    }
    dequeue(){
       return this.values.shift()
    }
}
const myqueue=new Queue();
myqueue.addValue(78)
myqueue.addValue(12)
myqueue.addValue(54)
myqueue.addValue(24)
myqueue.addValue(65)
console.log(`Beginig value removed ${myqueue.dequeue()}`);
myqueue.print()