class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  hash(key) {
    let total=0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }
  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(`Index ${i}  `,this.table[i]);
      }
    }
  }
}
const table = new HashTable(30);
table.set("name", "aflu");
table.set("age", 17);
table.set("Designation", "HR");
table.set("Domain", "MERN");
table.set("Place", "Malappuram");
table.set("Country", "US");
table.set("Hobby", "Gaming");
table.display();
console.log(`Gotted ${table.get("Hobby")}`);
