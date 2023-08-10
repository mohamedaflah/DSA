class Node {
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

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.#insertNode(this.root, newNode);
    }
  }
  #insertNode(node, newnode) {
    if (newnode.value < node.value) {
      if (!node.left) {
        node.left = newnode;
      } else {
        this.#insertNode(node.left, newnode);
      }
    } else {
      if (!node.right) {
        node.right = newnode;
      } else {
        this.#insertNode(node.right, newnode);
      }
    }
  }
  inOrderTraversal() {
    this.#inOrder(this.root);
  }
  #inOrder(node) {
    // lvr
    if (node) {
      this.#inOrder(node.left);
      console.log(node.value);
      this.#inOrder(node.right);
    }
  }

  PostOrderTraversal() {
    this.#postOrder(this.root);
  }

  #postOrder(node) {
    // lrv
    if (node) {
      this.#postOrder(node.left);
      this.#postOrder(node.right);
      console.log(node.value);
    }
  }

  PreOrderTraversal() {
    this.#preOrder(this.root);
  }
  #preOrder(node) {
    if (node) {
      console.log(node.value);
      this.#preOrder(node.left);
      this.#preOrder(node.right);
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(8);
binaryTree.insert(2);
binaryTree.insert(4);
console.log("In-order Traversal :");
binaryTree.inOrderTraversal();

console.log("Post-order Traversal :");
binaryTree.PostOrderTraversal();

console.log("Pre-order Traversal :");
binaryTree.PreOrderTraversal();
