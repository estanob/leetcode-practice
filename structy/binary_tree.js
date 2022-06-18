class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}









const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f



/** Depth First Values */
const depthFirstValues = (root) => {
  let values = []
  let stack = [root]
  while (stack.length > 0) {
    const node = stack.pop()
    values.push(node.val)

    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return values
}

// console.log("Test Case1:", depthFirstValues(a));





/** Breadth First Values */
const breadthFirstValues = (root) => {
  if (!root) return []
  let values = []
  let queue = [root]
  while (queue.length > 0) {
    const node = queue.shift()
    values.push(node.val)

    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return values
}

console.log(breadthFirstValues(a));





/** All Tree Paths */
/*
            a
           / \
          b  c
        / \   \
       d  e    f
*/

// DFS recursive
/*
Approach:
Base Case: 
    If we have a null node, we return []
Other base case:
    for a node D that has no left or right child, return [['D']] 

Recursive call for every node of the tree
*/

const allTreePaths = root => {
  if (!root) return [] // empty arr if root is undefined
  if (!root.left && !root.right) return [[root.val]] // if there is only a node but no left and right, return 2D array containing only array with root.val
  
  let paths = []

  const leftPath = allTreePaths(root.left)                // we expect 2D array
  for (let sub of leftPath) paths.push([root.val, ...sub]) // splat to decompose the sub arr and push in as part of the array already containg root.val

  const rightPath = allTreePaths(root.right)              // we expect 2D array
  for (let sub of rightPath) paths.push([root.val, ...sub])
  console.log("Paths:", paths);

  return paths;
}

// allTreePaths(a); // ->
// [ 
  //   [ 'a', 'b', 'd' ], 
  //   [ 'a', 'b', 'e' ], 
  //   [ 'a', 'c', 'f' ] 
  // ] 
  
  // console.log("Node A:", a);
  console.log("Test Case1:", allTreePaths(a));





























  /** Tree Sum */
const treeSum = (root) => {
  if (!root) return 0
  
  let sum = 0
  const queue = [root]

  while (queue.length > 0) {
    const currentNode = queue.shift()
    sum += currentNode.val
    if (currentNode.left) queue.push(currentNode.left)
    if (currentNode.right) queue.push(currentNode.right)
  }
  
  return sum;
};






const treeIncludes = (root, target) => {
  if (!root) return false
  if (root.val === target) return true
  return treeIncludes(root.left, target) || treeIncludes(root.right, target)
};





const howHigh = (node) => {
  if (!node) return -1;
  let leftHeight = howHigh(node.left)
  let rightHeight = howHigh(node.right)
  return 1 + Math.max(leftHeight, rightHeight)
};





const treeValueCount = (root, target) => {
  if (!root) return 0

  let count = 0
  let queue = [root]; // traverse every single node
  
  while (queue.length > 0) {
    const currentNode = queue.shift()

    if (currentNode.val === target) count++ // any time currentNode equals target, increse count
    if (currentNode.left) queue.push(currentNode.left)
    if (currentNode.right) queue.push(currentNode.right)
  }
  
  return count
};





/* Tree Min Value */
const treeMinValue = (root) => {
  // BFS approach
  let min = Infinity
  let queue = [root]

  while (queue.length > 0) {
    const currentNode = queue.shift()
    
    if (currentNode.val < min) min = currentNode.val
    if (currentNode.left) queue.push(currentNode.left)
    if (currentNode.right) queue.push(currentNode.right)
  }
  
  return min;
};





/*
Pseudocode
Base case 1:
    leaf node (no children) => sum is its value
Base case 2:
    if node is null => return negative Infinity    
Only consider max sum between two node sums
*/

const maxPathSum = (root) => {
  if (!root) return -Infinity // if the other child exists, it will automatically be the max
  if (!root.left && !root.right) return root.val; // when we reach a leaf node, return its value as its sum
  // let sum = -Infinity;
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right))
  // return sum;
};





/*
Pseudocode
BFS because we're checking by level
Travel from left to right
use a queue
*/

const bottomRightValue = (root) => {
  // todo
  const queue = [root]

  /* fixed: */
  let currentNode = null;
  while (queue.length > 0) {
    currentNode = queue.shift()
    if (currentNode.left !== null) queue.push(currentNode.left)
    if (currentNode.right !== null) queue.push(currentNode.right)
  }

  return currentNode.val

  /* my original: */
  // while (queue.length > 0) {
  //   const currentNode = queue.shift()
  //   if (currentNode.left !== null) queue.push(currentNode.left)
  //   if (currentNode.right !== null) queue.push(currentNode.right)
  //   if (currentNode.left === null && currentNode.right === null && queue.length === 0) return currentNode.val
  // }
};





/*
Gameplan:
Iterate BFS because we want each level
We know we're on a certain level by saving the queue size to its own variable, 
      then creating new levels when queue size has been reduced
*/

const treeLevels = (root) => {
  // todo
  if (!root) return []
  let levels = []
  let queue = [root]
  while (queue.length > 0) {
    let size = queue.length;
    let level = []
    while (size > 0) {
      const currentNode = queue.shift()
      level.push(currentNode.val)
      if (currentNode.left !== null) queue.push(currentNode.left)
      if (currentNode.right !== null) queue.push(currentNode.right)
      size--
    }
    levels.push(level)
  }
  return levels
};





/*
Gameplan:
BFS, average helper function to use on queue
*/

const levelAverages = (root) => {
  // todo
  if (!root) return []
  let levels = []
  let queue = [root]
  while (queue.length > 0) {
    let size = queue.length;
    let level = []
    while (size > 0) {
      const currentNode = queue.shift()
      level.push(currentNode.val)
      if (currentNode.left !== null) queue.push(currentNode.left)
      if (currentNode.right !== null) queue.push(currentNode.right)
      size--
    }
    levels.push(getLevelAverage(level))
  }
  return levels
};

const getLevelAverage = level => {
  let sum = 0;
  for (let num of level) sum += num
  return sum / level.length
}





/*
Gameplan:
DFS
Base case 1: 
     if root is null, return empty arr
Base case 2:
      if root is a leaf (no children) return arr with root's value
Recursive call:
      traverse through tree
*/

const leafList = (root) => {
  // todo
  if (root === null) return []
  if (root.left === null && root.right === null) return [root.val]
  
  const leaves = []
  leaves.push(...leafList(root.left))
  leaves.push(...leafList(root.right))
  return leaves
};