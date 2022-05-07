/** Same Tree */

class TreeNode {
  constructor (val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

var isSameTree = function(p, q) {
  const pArr = [p.val, p.left, p.right];
  const qArr = [q.val, q.left, q.right];
  let isSame = true;
  for (let i = 0; i < pArr.length; i++) {
    if (pArr[i] !== qArr[i]) isSame = false;
  }
  return isSame;
};

// const p1 = new TreeNode (1, 2, 3), q1 = new TreeNode (1, 2, 3);
// const p2 = new TreeNode (1, 2), q2 = new TreeNode (1, null, 2);
// const p3 = new TreeNode (1, 2, 1), q3 = new TreeNode (1, 1, 2);

// console.log("Test Case1:", isSameTree(p1, q1));
// console.log("Test Case2:", isSameTree(p2, q2));
// console.log("Test Case3:", isSameTree(p3, q3));

var checkTree = function (root) {
  // console.log("Tree:", root);
  return root.val === (root.left.val + root.right.val);
};

// const tenTree = new TreeNode (10, 4, 6);
// const fiveTree = new TreeNode (5, 1, 3);

// console.log("Test Case1:", checkTree(tenTree));
// console.log("Test Case2:", checkTree(fiveTree));



























/** Increasing Order Search Tree */

var increasingBST = function (root) {
  let stack = createSortedValuesArr(root);
  let newNode = null;
  let previous = null;
  while (stack.length) {
  // while (stack.length > 0) {
    let currentNode = stack.shift();
    if (!newNode) {
      newNode = currentNode;
      previous = newNode;
    } else {
      previous.right = currentNode;
      previous.left = null;
      previous = currentNode;
    }
  }
  return newNode;
};

var createSortedValuesArr = function (root) {
  let valuesArr = [];
  let currentRoot = root;
  while (currentRoot.left && currentRoot.right) {
    valuesArr.push(currentRoot);
    if (currentRoot.left.val) valuesArr.push(currentRoot.left);
    if (currentRoot.right.val) valuesArr.push(currentRoot.right);
    if (!currentRoot.left.val) {
      currentRoot = currentRoot.right;
    } else {
      currentRoot = currentRoot.left;
    };
  };
  valuesArr.sort((a, b) => a.val - b.val);
  return valuesArr;
}

// const node2 = new TreeNode(2, 1, null);
// const node4 = new TreeNode(4, null, null);
// const node3 = new TreeNode(3, node2, node4);
// const node8 = new TreeNode(8, 7, 9);
// const node6 = new TreeNode(6, null, node8);
// const tree1 = new TreeNode(5, node3, node6);

// const node1 = new TreeNode(1, null, null);
// const node7 = new TreeNode(7, null, null);
// const tree2 = new TreeNode(5, node1, node7);

// console.log("Test Case1: ", increasingBST(tree1));
// console.log("Test Case2: ", increasingBST(tree2));
// console.log("Test Case2 array: ", createSortedValuesArr(tree2));
// console.log("Trees:", tree1, tree2);














































var maxDepth = function(root) {
  // traverse the tree until we reach a node without children (i.e. this.left && this.right === null)
  // BFS - breadth first search - uses a queue - traverse level by level - FIFO 
  //      - BFS is usually used when we want to find something close to the root
  //      - push nodes, then shift nodes
  //      - we finish traversing when the queue is empty
  // DFS  - depth first search - uses a stack - LIFO
  //      - push nodes, pop nodes
  //      - we can use recursion because recursion utilizes an inherent stack
  //      - we finish traversing when the stack is empty
  //      - good for when we need to figure out "how far do we need to go"
  
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  const stack = [root];
  const traversed = [];
  while (stack.length > 0) {
    // console.log(`Iteration #${i}`, "Stack", stack);
    traversed.push(stack.pop());
    let currentNode = traversed[traversed.length -1]
    // if ((currentNode.right || currentNode.left) && traversed.length === 1) max++
    // console.log("Current Node:", currentNode);
    if (currentNode.left || currentNode.right) depth++
    if (currentNode.right) stack.push(currentNode.right)
    if (currentNode.left) stack.push(currentNode.left)
    // max++
    // pop out the top node from the stack
    // push in the top node's children into the stack
    // if we want to traverse left to right, we have to push in right before left
  //   console.log("Traversed:", traversed);
  //   if (currentNode.right.val) {
  //     stack.push(currentNode.right)
  //   }
  //   if (currentNode.left.val) {
  //     stack.push(currentNode.left)
  //   }
  //   stack.push(currentNode.right, currentNode.left)
  //   traversed.push(currentNode)
  // console.log("Stack Length = ", stack.length, "Traversed Length = ", traversed.length);
  }
  let depth = 0;
  
};

const node7 = new TreeNode(7, null, null)
const node15 = new TreeNode(15, null, null)
const node20 = new TreeNode(20, node15, node7)
const node9 = new TreeNode(9, null, null)
const tree3 = new TreeNode(3, node9, node20)

const node2 = new TreeNode(2)
const tree1 = new TreeNode(1, null, node2)
// console.log("Test Case:", );
// console.log("Tree:", tree3)
console.log(maxDepth(tree3))
console.log(maxDepth(tree1))
console.log(maxDepth(node7))
console.log(maxDepth(node20))