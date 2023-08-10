class node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insertData(value) {
    let newNode = new node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        } else {
          current = current.right;
        }
      }
    }
  }
  inOrder() {
    this.#inOrderHelper(this.root);
  }
  #inOrderHelper(current) {
    if (current) {
      // lvr
      this.#inOrderHelper(current.left);
      console.log(current.value);
      this.#inOrderHelper(current.right);
    }
  }
  displayEven() {
    this.#Travers(this.root);
  }
  #Travers(current) {
    if (current) {
      this.#Travers(current.left);
      if (this.#evenHelper(current.value)) {
        console.log(current.value);
      }
      this.#Travers(current.right);
    }
  }
  #evenHelper(num) {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
}
const bst = new BinaryTree();
bst.insertData(34);
bst.insertData(23);
bst.insertData(65);
bst.insertData(12);
bst.insertData(53);
bst.inOrder();

console.log(`Even Numbers are :`);
bst.displayEven();
