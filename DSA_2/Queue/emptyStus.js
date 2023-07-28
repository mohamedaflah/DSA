class Queue {
  constructor() {
    this.values = [];
  }
  addValue(value) {
    this.values.unshift(value);
  }
  isEmpty() {
    return this.values.length === 0;
  }
}
const que = new Queue();
que.addValue(10)
que.addValue(20)
que.addValue(30)
que.addValue(40)
que.addValue(50)
que.addValue(60)
let res = que.isEmpty()
  ? `Your Queue is Empty`
  : `Datas Available on You Queue`;
console.log(res);