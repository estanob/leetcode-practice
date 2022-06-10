class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


/** All Tree Paths */
const allTreePaths = root => {
  if (!root) return [] // empty arr if root is undefined
  if (!root.left && !root.right) return [[root.val]] // if there is only a node but no left and right, return array containing only array with root.val
  
  let paths = []

  const leftPath = allTreePaths(root.left)
  for (let sub of leftPath) paths.push([root.val, ...sub]) // splat to decompose the sub arr and push in as part of the array already containg root.val

  const rightPath = allTreePaths(root.right)
  for (let sub of rightPath) paths.push([root.val, ...sub])
  // console.log("Paths:", paths);

  return paths;
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

// allTreePaths(a); // ->
// [ 
//   [ 'a', 'b', 'd' ], 
//   [ 'a', 'b', 'e' ], 
//   [ 'a', 'c', 'f' ] 
// ] 

// console.log("Node A:", a);
console.log("Test Case1:", allTreePaths(a));