class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function areIdentical(root1, root2) {
  if (root1 == null && root2 == null) {
    return true;
  }

  if (root1 == null || root2 == null) {
    return false;
  }

  return (
    root1.value == root2.value &&
    areIdentical(root1.left, root2.left) &&
    areIdentical(root1.right, root2.right)
  );
}

const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

console.log(areIdentical(tree1, tree1));
