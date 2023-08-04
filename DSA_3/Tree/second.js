//                            _____________________________________________________
//                           |                                                    |
//                           | This Programe is a Basic Binary Tree Construction  |
//                           |____________________________________________________|

class node {
  // Create a node
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
  insert(data) {
    // Inserting Data in a Tree
    let newNode = new node(data);
    let current = this.root;
    if (!current) {
      this.root = newNode;
      return;
    }
    while (true) {
      if (data < current.data) {
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
  contain(data) {
    // Searching value in Tree( Containing Value in a Tree )
    let current = this.root;
    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  //  < Delete Operation Starte >
  Delete(data) {
    // Deleting or Removing Value
    this.#DeleteHelper(data, this.root, null);
  }
  #DeleteHelper(value, current, parent) {
    // # (Hash) Operator use set Function as Private  example :- private DeleteHelper() this is a Java Point of view
    // This Function Helping Deletion
    while (current) {
      if (value < current.data) {
        parent = current;
        current = current.left;
      } else if (value > current.data) {
        parent = current;
        current = current.right;
      } else {
        if (current.left && current.right) {
          current.data = this.#getMinValue(current.right);
          this.#DeleteHelper(current.data, current.right, current);
        } else {
          if (!parent) {
            if (!current.right) {
              this.root = current.left;
            } else {
              this.root = current.right;
            }
          } else {
            if (parent.left == current) {
              if (!current.right) {
                parent.left = current.left;
              } else {
                parent.left = current.right;
              }
            } else {
              if (!current.right) {
                parent.right = current.left;
              } else {
                parent.right = current.right;
              }
            }
          }
        }
        break;
      }
    }
  }
  #getMinValue(current) {
    // # (Hash) Operator use set Function as Private  example :- private DeleteHelper() this is a Java Point of view
    if (!current.left) {
      return current.data;
    } else {
      return this.getMinValue(current.left);
    }
  }
  // < Delete Operation End />

  inOrder() {
    // in order method is ( left , root , right)
    // Display in  "in Order"  method
    this.#inOrderHelper(this.root);
  }
  #inOrderHelper(current) {
    // This is the Helper method of inOrder :- display
    if (current) {
      this.#inOrderHelper(current.left);
      console.log(current.data);
      this.#inOrderHelper(current.right);
    }
  }

  preOrder() {
    // preOrder method is ( root , left , right)
    // Display in "Pre order" method

    this.#preOrderHelper(this.root);
  }
  #preOrderHelper(current) {
    if (current) {
      console.log(current.data);
      this.#postOrderHelper(current.left);
      this.#postOrderHelper(current.right);
    }
  }

  postOrder() {
    // Post order method is ( left , right , root )
    // Display in "Post Order" method

    this.#preOrderHelper(this.root);
  }
  #postOrderHelper(current) {
    if (current) {
      this.#postOrderHelper(this.left);
      this.#postOrderHelper(this.right);
      console.log(current.value);
    }
  }
}
const Tree = new BinarySearchTree();
Tree.insert(10);
Tree.insert(8);
Tree.insert(11);
Tree.insert(4);
Tree.insert(9);

// Tree.Delete(4);
console.log("Value Checked Status is :", Tree.contain(4));
console.log(`\nDatas in in order method`);
Tree.inOrder();

console.log(`\nDatas in preorder method`);
Tree.preOrder();

console.log(`\nDatas in post order method`);
Tree.postOrder();
