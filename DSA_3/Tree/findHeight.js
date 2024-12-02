class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function FindHeightofBst(root) {
  if (root == null) {
    return 0;
  }
  const queue = [root];
  let height = 0;
  while (queue.length > 0) {
    let nodeCount = queue.length;
    for (let i = 0; i < nodeCount; i++) {
      const currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    height++;
  }
  return height;
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);

console.log(FindHeightofBst(root));
//           10                      |1|
//          /  \                     | |
//         5   15                    |2|
//        / \                        | |
//       3   7                       |3|
