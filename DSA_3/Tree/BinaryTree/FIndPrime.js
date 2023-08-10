class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insertValue(value) {
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
  displayPrime() {
    this.#PrimeHelper(this.root);
  }
  #PrimeHelper(current) {
    if (current) {
      // lvr
      this.#PrimeHelper(current.left);
      if (this.#FindPrime(current.value)) {
        console.log(current.value);
      }
      this.#PrimeHelper(current.right);
    }
  }
  #FindPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return number;
  }
}

const binaryTree = new BinaryTree();
binaryTree.insertValue(10);
binaryTree.insertValue(30);
binaryTree.insertValue(60);
binaryTree.insertValue(7);
binaryTree.insertValue(90);
binaryTree.insertValue(23);
binaryTree.insertValue(20);
console.log(`Prime Numbers are Your Array is :`);
binaryTree.displayPrime()

