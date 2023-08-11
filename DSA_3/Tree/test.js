class Treenode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
    this.coutn = 0;
  }

  insert(value) {
    const newNode = new Treenode(value);
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
    this.inorderHelp(this.root);
  }
  inorderHelp(current) {
    if (current) {
      this.inorderHelp(current.left);
      this.coutn++;
    }
  }
  Travers2(){
    this.secondHelp(this.root)
  }
  secondHelp(current){
    if(current){
        this.secondHelp(current.right)
        this.coutn+=1;
    }
  }

  findHeight() {
    return this.coutn+1;
  }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(23);
tree.insert(53);
tree.insert(23);
tree.insert(9);
tree.inOrder();
// tree.Travers2()
console.log("Height of Your Tree is :" + tree.findHeight());
