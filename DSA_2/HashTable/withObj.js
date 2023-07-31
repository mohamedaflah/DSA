class HashTable {
  constructor() {
    this.values = {};
    this.length = 0;
    this.size = 0;
  }
  has(key) {
    return key.toString().length % this.size;
  }
  add(key) {
    const hash = this.has(key);
    if (!this.values.hashOwnProperty(hash)) {
      this.values[hash] = {};
    }

    if(!this.values[hash]){
        
    }
  }
}
