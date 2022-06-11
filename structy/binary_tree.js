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
const allTreePaths = root => {
  if (!root) return [] // empty arr if root is undefined
  if (!root.left && !root.right) return [[root.val]] // if there is only a node but no left and right, return array containing only array with root.val
  
  let paths = []

  const leftPath = allTreePaths(root.left)
  for (let sub of leftPath) paths.push([root.val, ...sub]) // splat to decompose the sub arr and push in as part of the array already containg root.val

  const rightPath = allTreePaths(root.right)
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
