class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      let newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
      } else {
        let current = this.root;
        while (true) {
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
    }
  
    contain(value) {
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
  
    displayInorder() {
      this.#inOrderHelper(this.root);
    }
  
    #inOrderHelper(current) {
      if (current) {
        this.#inOrderHelper(current.left);
        console.log(current.value);
        this.#inOrderHelper(current.right);
      }
    }
  
    displayPreOrder() {
      this.#preOrderHelper(this.root);
    }
  
    #preOrderHelper(current) {
      if (current) {
        console.log(current.value);
        this.#preOrderHelper(current.left);
        this.#preOrderHelper(current.right);
      }
    }
  
    displayPostOrder() {
      this.#postOrderHelper(this.root);
    }
  
    #postOrderHelper(current) {
      if (current) {
        this.#postOrderHelper(current.left);
        this.#postOrderHelper(current.right);
        console.log(current.value);
      }
    }
  
    Delete(value) {
      this.root = this.#DelHelper(value, this.root);
    }
  
    #DelHelper(data, current) {
      if (!current) {
        return null;
      }
  
      if (data < current.value) {
        current.left = this.#DelHelper(data, current.left);
      } else if (data > current.value) {
        current.right = this.#DelHelper(data, current.right);
      } else {
        if (!current.left) {
          return current.right;
        } else if (!current.right) {
          return current.left;
        }
  
        current.value = this.#getMinimumValue(current.right);
        current.right = this.#DelHelper(current.value, current.right);
      }
  
      return current;
    }
  
    #getMinimumValue(current) {
      if (!current.left) {
        return current.value;
      }
      return this.#getMinimumValue(current.left);
    }
  }
  
  // Sample usage of Binary Tree
  const Bst = new BinarySearchTree();
  Bst.insert(19);
  Bst.insert(90);
  Bst.insert(10);
  Bst.insert(54);
  Bst.insert(67);
  Bst.insert(23);
  
  console.log(`Your Value Containing Status ${Bst.contain(10)}`);
  console.log(`Your Binary Search Tree Display in Inorder`);
  Bst.displayInorder();
  console.log(`Your Binary Search Tree Display in PreOrder`);
  Bst.displayPreOrder();
  Bst.Delete(54);
  console.log(`Status of 54: ${Bst.contain(54)}`);
  console.log(`Your Binary Search Tree Display in Post order`);
  Bst.displayPostOrder();
  