function deserialize(data) {
  if (!data.length) return null;
  const root = new TreeNode(data.shift());
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    const leftVal = data.shift();
    if (leftVal !== undefined) {
      node.left = new TreeNode(leftVal);
      queue.push(node.left);
    }
    const rightVal = data.shift();
    if (rightVal !== undefined) {
      node.right = new TreeNode(rightVal);
      queue.push(node.right);
    }
  }
  return root;
}
