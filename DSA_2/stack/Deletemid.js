
class Stack{
    constructor(){
        this.values=[];
    }
    push(value){
        this.values.push(value)
    }
    DeleteMid(){
        let newAr=new Stack();
        const midde=Math.floor(this.values.length/2);
        for(let i=0;i<midde;i++){
            newAr.push(this.values.pop());
        }
        const deleted=this.values.pop();
        for(let i=0;i<midde;i++){
            this.values.push(newAr.pop());
        }

        return deleted;
    }
    display(){
        console.log(this.values)
    }
    pop(){
        this.values.pop()
    }
}
const stack=new Stack();
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)
stack.display()
stack.DeleteMid();
stack.display()