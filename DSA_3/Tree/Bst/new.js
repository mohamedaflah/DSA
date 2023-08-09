class node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  InsertData(value) {
    let newnode = new node(value);
    let current = this.root;
    if (!this.root) {
      this.root = newnode;
      return;
    }
    while (true) {
      if (value < current.data) {
        if (!current.left) {
          current.left = newnode;
          break;
        } else {
          current = current.left;
        }
      } else if (value > current.data) {
        if (!current.right) {
          current.right = newnode;
          break;
        } else {
          current = current.right;
        }
      }
    }
  }
  contain(value) {
    let current = this.root;
    while (current) {
      if (value < current.data) {
        current = current.left;
      } else if (value > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}
const tree = new BinarySearchTree();
tree.InsertData(10);
tree.InsertData(8);
tree.InsertData(11);
console.log(tree.contain(11));
