class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTbl {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * (i + 1)) % this.size;
    }

    return hash;
  }
  insert(key, value) {
    const index = this.hash(key);
    const newNode = new Node(key, value);

    if (!this.table[index]) {
      this.table[index] = newNode;
    } else {
      let current = this.table[index];
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  get(key){
    const index=this.hash(key);
    if(!this.table[index]){
        return undefined;
    }

    let current=this.table[index];
    while(current){
        if(current.key ===key){
            return current.value;
        }
        current=current.next;;
    }
    return undefined
  }
}
const hashTb=new HashTbl(20);
hashTb.insert("name","John")
hashTb.insert("Aflu",16)
hashTb.insert("autolearning","John")
hashTb.insert("experice","John")
console.log(hashTb.get("name"));;