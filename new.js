class node{
    constructor(value){
      this.value=value;
      this.next=null
      this.prev=null
    }
  }
  class Doubly{
    constructor(){
      this.head=null
      this.tail=null
      this.size=0
    }
    prepend(value){
      let nd=new node(value);
      if(this.head==null){
        this.head=nd;
        this.tail=nd
      }else{
        nd.next=this.head;
        this.head.prev=nd;
        this.head=nd
      }
      this.size++;
    }
    append(value){
      let nd=new node(value);
        if(this.head==null){
          nd.next=this.head;
          this.head.prev=nd;
          this.head=nd
        }else{
          nd.prev=this.tail
          this.tail.next=nd
          this.tail=nd
        }
      this.size++
    }
    Del(index){
      if(index==0){
        this.head=this.head.next;
      }else{
        let current=this.head;
        let c=0,prev;
        while(c<index)
          {
            c++;
            prev=current;
            current=current.next;
          }
        prev.next=current.next
      }
      this.size--;
    }
    display(){
      let current=this.head;
      let str=``;
      while(current){
        str+=`${current.value} `;
        current=current.next
      }
      console.log(str)
    }
    Revers(){
      let current=this.tail
      let str=``;
      while(current){
        str+=`${current.value} `;
        current=current.prev;
      }
      console.log(str);
    }
  }
  
  const doub=new Doubly();
  doub.prepend(10)
  doub.prepend(30)
  doub.prepend(70)
  doub.prepend(40)
  doub.append(100)
  doub.prepend(50)
  doub.Del(1)
  doub.display()