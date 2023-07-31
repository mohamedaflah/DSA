class hashtable {
  storage = new Array(3);
  hash(key) {
    return key.length;
  }
  set(key, value) {
    const hash = this.hash(key);
    this.storage[hash] = value;
  }
  get(key) {
    const hash = this.hash(key);
    return this.storage[hash];
  }
}

const hashT=new hashtable()
hashT.set("John","Tony Stark")
hashT.set("Captain","Steve Richard")
