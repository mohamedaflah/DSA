class Stack{
    constructor(){
        this.stk=[]
    }
    push(item){
        this.stk.push(item)
    }
    pop(){
        this.stk.pop()
    }
    DeleteMid(){
        const mid=Math.floor(this.stk.length/2);
        const tempStack=[];
        for(let i=0;i<mid;i++){
            tempStack.push(this.stk.pop())
        }
        let deleted=this.stk.pop()
        while(tempStack.length > 0){
            this.stk.push(tempStack.pop())
        }
        return deleted;
    }
}
const st=new Stack();
st.push(10)
st.push(20)
st.push(30)
st.push(40)
st.push(50)
st.push(60)
console.log(st.DeleteMid())