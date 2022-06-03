class BST {
  constructor (value, left, right) {
    this.value = value;
    this.left = left === undefined ? null : left;
    this.right = left === undefined ? null : right;
  };
};

/** Find Closest Value in BST */
function findClosestValueInBST (tree, target) {
  let closestNode = tree
  let stack = [tree]
  while (stack.length > 0) {
    let currentNode = stack.pop()
    console.log("Current Node", currentNode);
    if (Math.abs(currentNode.value - target) < Math.abs(closestNode.value - target)) {
      closestNode = currentNode
    }
    if (currentNode.left) stack.push(currentNode.left)
    if (currentNode.right) stack.push(currentNode.right)
  }
  return closestNode.value;
}

const node15 = new BST(15, new BST(13, null, new BST(14)), new BST(22))
const node5 = new BST(5, new BST(2, new BST(1)), new BST(5))
const tree10 = new BST(10, node5, node15)

console.log("Sample Input:", findClosestValueInBST(tree10, 12));