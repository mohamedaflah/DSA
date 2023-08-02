
class Stack {
  constructor() {
    this.values = [];
  }
  reverseString(value) {
    if (isNaN(value)) {
        // value=value.split("");
        for (let i = 0; i < value.length; i++) {
          this.values.push(value[i]);
        }
      } else {
        this.values.push(value);
      }
    let newAr = [];
    for (let i = 0; i < this.values.length; i++) {
      if (isNaN(this.values[i])) {
        newAr.push(this.values[i]);
      }
    }
    let str = newAr.reverse().join("");
    return str;
  }
}
const stk = new Stack();

let r1="Aflu";
console.log(stk.reverseString(r1));  



