//                       Just Sample of Tree
class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newnode = new node(value);
    if (this.isEmpty()) {
      this.root = newnode;
    } else {
      this.insertNode(this.root, newnode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
}
const bst = new BinarySearchTree();
console.log("Tree Empty Status is :" + bst.isEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
