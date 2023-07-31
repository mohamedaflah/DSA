class HashTable{
    constructor(size){
      this.size=size;
      this.table=new Array(size);
    }
    hash(key){
      if(isNaN(key)){
         let t=0
      for(let i=0;i<key.length;i++){
        t+=key.charCodeAt(i);
      }
      return t % this.size;
      }else{
        return key%this.size;
      }
    }
    set(key,value){
      const index=this.hash(key);
      this.table[index]=value;
    }
    display(){
      for(let i=0;i<this.table.length;i++){
        if(this.table[i]){
          
        console.log(this.table[i]);
        }
      }
    }
  }
  const hasTb=new HashTable(20);
  hasTb.set(1,"Aflu")
  hasTb.set(2,"Siraj")
  hasTb.set(3,"Afsal")
  hasTb.set(4,"Feys")
  hasTb.set(5,"shamal")
  hasTb.set("Domain","MERN")
  hasTb.display()