class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    append(value){
        let newNode=new node(value);
        if(this.head==null){
            this.head=newNode;
        }else{
            let current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=newNode;
        }
        this.size++;
    }
    display(){
        if(this.head==null){
            console.log(`Your List is Empty`);
        }else{
            let current=this.head;
            let str=``;
            while(current){
                str+=`${current.value} `
                current=current.next;
            }
            console.log(str);
        }
    }
}
const lnk=new LinkedList()
lnk.append(10)
lnk.append(20)
lnk.append(30)
lnk.display()