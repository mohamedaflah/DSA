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
  InsertData(value) {
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
  contains(value) {
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // In-order start //
  TraverseInOrder() {
    this.#InorderHelperFun(this.root);
  }
  #InorderHelperFun(current) {
    // lvr
    if (current) {
      this.#InorderHelperFun(current.left);
      console.log(current.value);
      this.#InorderHelperFun(current.right);
    }
  }
  // In-order end

  // post-order start
  TraversePostOrder() {
    this.#PostOrderHelpFun(this.root);
  }
  #PostOrderHelpFun(current) {
    // lrv
    if (current) {
      this.#PostOrderHelpFun(current.left);
      this.#PostOrderHelpFun(current.right);
      console.log(current.value);
    }
  }

  // post-order end

  // pre-order start
  TraversePreOrder() {
    // vlr
    this.#PreOrderHelperFun(this.root);
  }
  #PreOrderHelperFun(current) {
    if (current) {
      console.log(current.value);
      this.#PreOrderHelperFun(current.left);
      this.#PreOrderHelperFun(current.right);
    }
  }
  FindOddNumbers() {
    this.#FindOdds(this.root);
  }
  #FindOdds(current) {
    if (current) {
      this.#FindOdds(current.left);
      if (this.#OddFinder(current.value)) {
        console.log(current.value);
      }
      this.#FindOdds(current.right);
    }
  }
  #OddFinder(num) {
    return num % 2 == 1;
  }
  Delete(value) {
    this.root = this.#removeNode(this.root, value);
  }
  #removeNode(node, value) {
    if (!node) {
      return null;
    }
    if (value === node.value) {
      // node to be deleted found
      if (!node.left && !node.right) {
        return null; // No child
      }
      if (!node.left) {
        return node.right; // One child (right)
      }
      if (!node.right) {
        /// One child (left)
        return node.left;
      }

      // Node has two children
      const minRightnode = this.#findMinNode(node.right);
      node.value = minRightnode.value;
      node.right = this.#removeNode(node.right, minRightnode.value);
      return node;
    } else if (value < node.value) {
      node.left = this.#removeNode(node.right, value);
      return node;
    } else {
      node.right = this.#removeNode(node.right, value);
      return node;
    }
  }
  #findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
}

const myTree = new BinaryTree();
myTree.InsertData(19);
myTree.InsertData(20);
myTree.InsertData(32);
myTree.InsertData(9);

console.log("Value Containing Status :" + myTree.contains(9));
console.log(`Display Binary Tree in Inorder`);
myTree.TraverseInOrder();

console.log(`Display Binary Tree in Post-order`);
myTree.TraversePostOrder();

console.log(`Display Binary Tree in Pre-order`);
myTree.TraversePreOrder();

console.log("Display odd Numbers ");
myTree.FindOddNumbers();
