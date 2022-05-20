class TreeNode {
  constructor (val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

class Node {
  constructor(val, children) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

















/** Same Tree */
var isSameTree = function(p, q) {
  // const pArr = [p.val, p.left, p.right];
  // const qArr = [q.val, q.left, q.right];
  // let isSame = true;
  // for (let i = 0; i < pArr.length; i++) {
  //   if (pArr[i] !== qArr[i]) isSame = false;
  // }
  // return isSame;


  /**
   * check current node
   *      if same value, continue
   * 
   * return p.val === q.val && 
   * 
   * when do we return false?
   *      if value of current is not equal
   *      if one node is null but the other is not
   * 
   * 
   * 
   * 
   * when do we return true?
   *    if both nodes are null, return true
   */



  
  if (!p && !q) return true
  if (!p && q || p && !q) return false
  if (p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
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



















/** Univalued Binary Tree */
function isUnivalTree(root) {
  /** DFS iterative 
  let stack = [root] 
  const uniVal = root.val
  while (stack.length) {
    let currentNode = stack.pop()
    if (currentNode.val !== uniVal) return false;
    if (currentNode.left) stack.push(currentNode.left)
    if (currentNode.right) stack.push(currentNode.right)
  }
  return true; */

  /** DFS recursive */
  let uniValue = root.val
  return sameThroughout(root, uniValue)
}

function sameThroughout(node, uniValue) {
  if (!node) return true  // base case
  let leftCheck = sameThroughout(node.left, uniValue)     // recursive call
  let rightCheck = sameThroughout(node.right, uniValue)   // recursive call
  return node.val === uniValue && leftCheck && rightCheck // all 3 must be true
}

// const tree1 = new TreeNode(1, new TreeNode(1, new TreeNode(1), new TreeNode(1)), new TreeNode(1, null, new TreeNode(1))) // => true
// const tree2 = new TreeNode(2, new TreeNode(2, new TreeNode(5), new TreeNode(2)), new TreeNode(2)) // => false

// console.log("Test Case1: ", isUnivalTree(tree1));
// console.log("Test Case2: ", isUnivalTree(tree2));
// console.log("Test Case3: ", isUnivalTree(new TreeNode(9, new TreeNode(9, new TreeNode(9), new TreeNode(9)), new TreeNode(6)))); // [9,9,6,9,9] => false





















/** Convert Sorted Array to Binary Search Tree */
function sortedArrayToBST (nums) {
  if (!nums.length) return null

  let halfPoint = Math.floor(nums.length / 2)
  const node = new TreeNode(nums[halfPoint])

  node.left = sortedArrayToBST(nums.slice(0, halfPoint))    // recursive call to add nodes to left and right side
  node.right = sortedArrayToBST(nums.slice(halfPoint + 1))  // recursive call to add nodes to left and right side

  return node
}

console.log("Test Case1: ", sortedArrayToBST([-10, -3, 0, 5, 9]));
























/** Subtree of Another Tree */
function isSubtree (root, subroot) {
  let stack = [root]
  while (stack.length > 0) {
    let currentNode = stack.pop()
    if (currentNode === subroot) return true
    if (currentNode.left) stack.push(currentNode.left)
    if (currentNode.right) stack.push(currentNode.right)
  }
  return false
}

// const node4 = new TreeNode(4, new TreeNode(1), new TreeNode(2))
// const node5 = new TreeNode(5)
// const node3 = new TreeNode(3, node4, node5)

// console.log("Test Case1:", isSubtree(node3, node4));

























/** Two Sum IV - Input is a BST */
function findTarget(root, k) {
  let stack = [root]
  let nodeVals = []
  while (stack.length) {
    let currentNode = stack.pop()
    nodeVals.push(currentNode.val)
    if (currentNode.left) stack.push(currentNode.left)
    if (currentNode.right) stack.push(currentNode.right)
  }
  for (let i = 0; i < nodeVals.length - 1; i++) {
    for (let j = 0; j < nodeVals.length; j++) {
      if (i < j && nodeVals[i] + nodeVals[j] === k) return true
    }
  }
  return false
}

// const tree5 = 
//   new TreeNode(
//     5, 
//     new TreeNode(
//       3, new TreeNode(2), new TreeNode(4)
//     ), 
//     new TreeNode(
//       6, null, new TreeNode(7)
//     )
//   )

// console.log("Test Case1: ", findTarget(tree5, 9));
// console.log("Test Case2: ", findTarget(tree5, 28));

































/** Binary Tree Level Order Traversal */
function levelOrder (root) {
  if (!root) return []
  let levels = []
  let queue = [root]
  while (queue.length > 0) {
    let indivLevel = []
    let size = queue.length
    while (size > 0) {
      size--
      let currentNode = queue.shift()
      indivLevel.push(currentNode.val)
      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
    }
    levels.push(indivLevel)
  }
  return levels
}

// const node7 = new TreeNode(7)
// const node15 = new TreeNode(15)
// const node20 = new TreeNode(20, node15, node7)
// const node9 = new TreeNode(9)
// const node3 = new TreeNode(3, node9, node20)

// console.log("Test Case1: ", levelOrder(node3));



/**
 * 
 * @param {const levelOrderBFS = function(root) {
    if (!root) return [];
    
    const queue = [{node: root, level: 0}];
    const output = [];
    
    while (queue.length > 0) {
        const {node, level} = queue.shift();
        if (!output[level]) output.push([]);
        output[level].push(node.val);
            
        if (node.left !== null) queue.push({node: node.left, level: level+1});
        if (node.right !== null) queue.push({node: node.right, level: level+1});
    }
    
    return output;
};
DFS - iterative
Note: notice that DFS must push right first if we want to access left first
const levelOrderDFS = function(root) {
    if (!root) return [];
    
    const stack = [{node: root, level: 0}];
    const output = [];
    
    while (stack.length > 0) {
        const {node, level} = stack.pop();
        if (!output[level]) output.push([]);
        output[level].push(node.val);
        
        if (node.right !== null) stack.push({node: node.right, level: level+1});
        if (node.left !== null) stack.push({node: node.left, level: level+1});
    }
    
    return output;
};
DFS - recursive
const levelOrderRecursive = function(root) {
    const levels = [];
      dfsHelper(root, levels, 0);
      return levels;
};

const dfsHelper = (root, levels, levelNum) => {
  if (!root) return;
  
  if (levelNum === levels.length) {
    levels.push([root.val]);
  } else {
    levels[levelNum].push(root.val);
  }
  
  dfsHelper(root.left, levels, levelNum + 1);
  dfsHelper(root.right, levels, levelNum + 1);
}} root 
 */
















































/** Level Order Bottom */
function levelOrderBottom (root) {
  if (!root) return []
  let levels = []
  let queue = [root]
  while (queue.length > 0) {
    let indivLevel = []
    let size = queue.length
    while (size > 0) {
      size--
      let currentNode = queue.shift()
      indivLevel.push(currentNode.val)
      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
    }
    levels.unshift(indivLevel)
  }
  return levels
}

// const node7 = new TreeNode(7)
// const node15 = new TreeNode(15)
// const node20 = new TreeNode(20, node15, node7)
// const node9 = new TreeNode(9)
// const node3 = new TreeNode(3, node9, node20)

// console.log("Test Case1: ", levelOrderBottom(node3));




















/** Insert into a Binary Search Tree */
function insertIntoBST(root, val) {
  // let stack = [root];
  // while (stack.length > 0) {
  //   let currentNode = stack.pop()
  //   if (currentNode.left !== null) stack.push(currentNode.left)
  //   if (currentNode.right !== null) stack.push(currentNode.right)
  //   if (currentNode.left === null && val < currentNode.val) {
  //     currentNode.left = new TreeNode (val)
  //     return root
  //   }
  //   if (currentNode.right === null && val < currentNode.val) {
  //     currentNode.right = new TreeNode (val)
  //     return root
  //   }
  // }

  const newNode = new TreeNode(val)
  if (!root) return newNode

  if (val < root.val) root.left = insertIntoBST(root.left, val)
  if (val > root.val) root.right = insertIntoBST(root.right, val)

  return root
}


// const node3 = new TreeNode(3)
// const node1 = new TreeNode(1)
// const node2 = new TreeNode(2, node1, node3)
// const node7 = new TreeNode(7)
// const tree4 = new TreeNode(4, node2, node7)

// console.log("Test Case1: ", insertIntoBST(tree4, 5));























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
  
  /*
  if (!root) return 0;
  let stack = [root];
  // const stack = [root];
  // const traversed = [];
  let depth = 0;
  while (stack.length > 0) {
    let levelStack = []
    for (let node of stack) {
      if (node.right) levelStack.push(node.right)
      if (node.left) levelStack.push(node.left)
    }
    stack = levelStack
    // traversed.push(stack.pop());
    // let currentNode = traversed[traversed.length -1]
    // if ((currentNode.right || currentNode.left) && traversed.length === 1) max++
    // console.log("Current Node:", currentNode);
    // if (currentNode.right) stack.push(currentNode.right)
    // if (currentNode.left) stack.push(currentNode.left)
    // max++
    // pop out the top node from the stack
    // push in the top node's children into the stack
    // if we want to traverse left to right, we have to push in right before left
    depth++;
  }
  return depth;
  */





  
  
  

  // BFS iterative
  // /*
  let depth = 0
  let queue = [root]
  while (queue.length > 0) {
    depth++
    let size = queue.length
    while (size > 0) {
      size--
      let currentNode = queue.shift()
      if (currentNode.left !== null) queue.push(currentNode.left)
      if (currentNode.right !== null) queue.push(currentNode.right)
    }
  }
  return depth
  // */ 


  
  
  
  
  
  /** DFS recursive -- review */
  // if (!root) return 0
  // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 // add 1 because base case says to return 0


  



  /** BFS */
  // if (!root) return 0
  // let depth = 0;
  // let queue = [root]
  // let traversed = []
  // while (queue.length > 0) {
  //   let currentNode = queue.shift()
  //   traversed.push(currentNode)
  //   if (currentNode.left) traversed.push(currentNode.left)
  //   if (currentNode.right) traversed.push(currentNode.right)
  // }
  // return depth
};

// const node7 = new TreeNode(7, null, null)
// const node15 = new TreeNode(15, null, null)
// const node20 = new TreeNode(20, node15, node7)
// const node9 = new TreeNode(9, null, null)
// const tree3 = new TreeNode(3, node9, node20)

// const node2 = new TreeNode(2)
// const tree1 = new TreeNode(1, null, node2)


// const nodeFive = new TreeNode(5)
// const nodeFour = new TreeNode(4)
// const nodeThree = new TreeNode(3, null, nodeFive)
// const nodeTwo = new TreeNode(2, nodeFour, null)
// const treeOne = new TreeNode(1, nodeTwo, nodeThree)
// console.log("Test Case:", );
// console.log("Tree:", tree3)
// console.log(maxDepth(tree3))
// console.log(maxDepth(tree1))
// console.log(maxDepth(node7))
// console.log(maxDepth(node20))
// console.log("Tree One: ", maxDepth(treeOne));




















/** Maximum Depth of N-ary Tree */
function maxDepthNAry (root) {
  if (!root) return 0; // base case is to return 0 because a null root has 0 level depth

  // if (root.children) {
  //   for (let i = 0; i < root.children.length; i++) {
  //     let child = root.children[i]
  //     return maxDepthNAry(child)
  //   }
  // }
  // return Math.max(maxDepthNAry(root.children)) + 1


  
  /** Recursive call, but not optimized because we have to iterate through all children of the root node */
  let max = 0     // default set the depth at 0
  for (let child of root.children) {    // iterate through the children
    max = Math.max(max, maxDepthNAry(child))  // recursive call 
    // this will reassign the max depth level
  }
  return 1 + max  // + 1 because the base case is 0 
}

// const node10 = new Node(10)
// const node13 = new Node(13)
// const node9 = new Node(9 [node13])
// const node5 = new Node(5, [node9, node10])
// const node12 = new Node(12)
// const node8 = new Node(8, [node12])
// const node4 = new Node(4, [node8])
// const node14 = new Node(14)
// const node11 = new Node(11, [node14])
// const node7 = new Node(7, [node11])
// const node6 = new Node(6)
// const node3 = new Node(3, [node6, node7])
// const node2 = new Node(2)
// const tree1 = new Node(1, [node2, node3, node4, node5])

// console.log("Test Case: ", maxDepthNAry(tree1)); // => 5































/** Range Sum of BST */
function rangeSumBST (root, low, high) {
  let sum = 0;
  let stack = [root]
  while (stack.length > 0) {
    let currentNode = stack.pop()
    if (currentNode.left) stack.unshift(currentNode.left)
    if (currentNode.right) stack.unshift(currentNode.right)
    // let currentNode = stack.shift()
    // if (currentNode.left) stack.push(currentNode.left)
    // if (currentNode.right) stack.push(currentNode.right)
    if (currentNode.val >= low && currentNode.val <= high) sum += currentNode.val
  }
  return sum
}

// const node7 = new TreeNode(7)
// const node3 = new TreeNode(3)
// const node18 = new TreeNode(18)
// const node15 = new TreeNode(15, null, node18)
// const node5 = new TreeNode(5, node3, node7)
// const tree10 = new TreeNode(10, node5, node15)
// console.log("Test Case1:", rangeSumBST(tree10, 7, 15));






















/** Search in a Binary Search Tree */
function searchBST (root, val) {
  let stack = [root]
  while (stack.length > 0) {
    let currentNode = stack.pop()
    if (currentNode.val === val) return currentNode
    if (currentNode.left) stack.unshift(currentNode.left)
    if (currentNode.right) stack.unshift(currentNode.right)
  }
  return null;
}

// const node3 = new TreeNode(3)
// const node1 = new TreeNode(1)
// const node7 = new TreeNode(7)
// const node2 = new TreeNode(2, node1, node3)
// const tree4 = new TreeNode(4, node2, node7)
// console.log("Test Case 1:", searchBST(tree4, 2));


















/** Cousins in Binary Tree */
function isCousins (root, x, y) {
  let queue = [root]
  let nodeChildren = []
  let nodeGrandChildren1 = []
  let nodeGrandChildren2 = []
  while (queue.length > 0) {
    let currentNode = queue.shift()
    if (currentNode.left) nodeChildren.push(currentNode.left)
    if (currentNode.right) nodeChildren.push(currentNode.right)
    if (nodeChildren.length === 2) {
      let firstChild = nodeChildren[0]
      let secChild = nodeChildren[1]
      if (firstChild.left) nodeGrandChildren1.push(firstChild.left)
      if (firstChild.right) nodeGrandChildren1.push(firstChild.right)
      if (secChild.left) nodeGrandChildren2.push(secChild.left)
      if (secChild.right) nodeGrandChildren2.push(secChild.right)
    } 
  }
  if ((nodeGrandChildren1.find(ele => ele.val === x) && nodeGrandChildren2.find(ele => ele.val === y)) || (nodeGrandChildren1.find(ele => ele.val === y) && nodeGrandChildren2.find(ele => ele.val === x))) return true;
  return false;
  // return "Grand Children1: " + nodeGrandChildren1 + "Grand Children2: ", nodeGrandChildren2
}

// const node5 = new TreeNode (5)
// const node3 = new TreeNode (3, null, node5)
// const nodeThree = new TreeNode(3)
// const node4 = new TreeNode(4)
// const node2 = new TreeNode(2, node4, null)
// const tree1 = new TreeNode (1, node2, node3)
// const treeOne = new TreeNode(1, node2, nodeThree)

// console.log("Test Case1: ",isCousins(tree1, 5, 4));
// console.log("Test Case2: ",isCousins(treeOne, 4, 3));

































/** Average of Levels in Binary Tree */
function averageOfLevels(root) {
  let averages = []
  let queue = [root]
  while (queue.length > 0) {
    let levelValues = []
    let size = queue.length
    while (size > 0) {
      size --
      let currentNode = queue.shift()
      levelValues.push(currentNode.val)
      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
    }
    averages.push(getAverage(levelValues))
  }
  return averages
}

function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    sum += num
  }
  return sum / arr.length
}

// const node7 = new TreeNode(7)
// const node15 = new TreeNode(15)
// const node20 = new TreeNode(20, node15, node7)
// const node9 = new TreeNode(9)
// const node3 = new TreeNode(3, node9, node20)

// console.log("Test Case1: ", averageOfLevels(node3));
































/** Kth Smallest Element in  BST */
function kthSmallest (root, k) {
  let nodeArr = []
  let queue = [root];       // start the queue with the given root
  while (queue.length) {    // while the queue is filled, do something
    let currentNode = queue.shift()   // remove element 0 of the queue
    nodeArr.push(currentNode.val)     // push the value to the node array
    if (currentNode.left) queue.push(currentNode.left)  // if there's a left value, push it to the queue
    if (currentNode.right) queue.push(currentNode.right) // if there's a right value, push it to the queue
  }
  return nodeArr.sort((a, b) => a - b)[k -1] // sort the node array in ascending order, then return index k - 1 because of 0 indexing
}

// const node2 = new TreeNode(2)
// const node4 = new TreeNode(4)
// const node1 = new TreeNode(1, node2)
// const tree3 = new TreeNode(3, node1, node4)

// console.log("Test Case1: ", kthSmallest(tree3, 1));


































/** Second Minimum Node in a Binary Tree */
function findSecondMinimumValue (root) {
  if (!root) return -1
  let nodeValues = {}
  let queue = [root]
  while (queue.length > 0) {
    let currentNode = queue.shift()
    if (currentNode.left) queue.push(currentNode.left)
    if (currentNode.right) queue.push(currentNode.right)
    if (!nodeValues[currentNode.val]) nodeValues[currentNode.val]
  }
  let nodeValsArr = Object.keys(nodeValues).sort((a, b) => a - b)
  return nodeValsArr.length >= 2 ? nodeValsArr[1] : -1
}




















/** Validate Binary Searth Tree */
function isValidBST(root) {
  // let queue = [root]
  // let parentNode = root
  // while (queue.length > 0) {
  //   let currentNode = queue.shift()
  //   if (currentNode === parentNode) {
  //     if ((currentNode.left && currentNode.left.val > currentNode.val) || (currentNode.right && currentNode.right.val < currentNode.val)) return false
  //     if (currentNode.left) queue.push(currentNode.left)
  //     if (currentNode.right) queue.push(currentNode.right)
  //   } else {
  //     if (currentNode)
  //   }
  // }
  // return true



  /*
  return checkBST(root)
  function checkBST(root , min = -Infinity , max = +Infinity){
    console.log("Root: ", root);
    if(!root)return true;
    if(root.val <= min ||  root.val >= max) return false
    return checkBST(root.left , min , root.val ) && checkBST(root.right , root.val , max )
  }
  */
  
  
  
  
//   let stack = [root]
//   while (stack.length > 0) {
//     let currentNode = stack.pop()
//     if ((currentNode.left && currentNode.left.val >= currentNode.val) || (currentNode.right && currentNode.right.val <= currentNode.val)) return false
//     if (currentNode.left) stack.push(currentNode.left)
//     if (currentNode.right) stack.push(currentNode.right)
//   }
//   return true
// }
  // return helper(root, null, null);







  // base case
  if (!root.left && !root.right) return true
  if ((root.left && root.left.val > root.val) || (root.right && root.right.val < root.val)) return false
  if ((root.left && root.left.val < root.val) || (root.right && root.right.val > root.val)) return true
  return isValidBST(root.left) && isValidBST(root.right)
};

// var helper = function(node, lower, upper) {
//     if (node == null) return true;
//     console.log("Node = ", node, "lower = ", lower, "upper = ", upper);
//     let val = node.val;
    
//     if (lower != null && val <= lower) return false;
//     if (upper != null && val >= upper) return false;
    
//     if (! helper(node.right, val, upper)) return false;
//     if (! helper(node.left, lower, val)) return false;
    
//     return true;
// };

const node3 = new TreeNode(3)
const node1 = new TreeNode(1)
const tree2 = new TreeNode(2, node1, node3)

const node6 = new TreeNode(6)
const node4 = new TreeNode(4, node3, node6)
const tree5 = new TreeNode(5, node1, node4)

console.log("Test Case1:", isValidBST(tree2));
console.log("Test Case2:", isValidBST(tree5));
console.log("Test Case3:", isValidBST(new TreeNode(2, new TreeNode(2),new TreeNode(2))));




























/** Lowest Common Ancestor of a Binary Search Tree */
function lowestCommonAncestor (root, p, q) {
  let currentNode = root;
  while (currentNode) {
    if (p < currentNode.val && q < currentNode.val) {
      currentNode = currentNode.left
    } else if (p > currentNode.val && q > currentNode.val) {
      currentNode = currentNode.right
    }
  }
  return currentNode.val
}

// const node5 = new TreeNode(5)
// const node3 = new TreeNode(3)
// const node4 = new TreeNode(4, node3, node5)
// const node0 = new TreeNode(0)
// const node9 = new TreeNode(9)
// const node7 = new TreeNode(7)
// const node8 = new TreeNode(8, node7, node9)
// const node2 = new TreeNode(2, node0, node4)
// const tree6 = new TreeNode(6, node2, node8)

// console.log("Test Case1: ", lowestCommonAncestor(tree6, 2, 8));
// console.log("Test Case2: ", lowestCommonAncestor(tree6, 2, 4));
// console.log("Test Case3: ", lowestCommonAncestor(new TreeNode(2, new TreeNode(1)), 2, 1));






























/** NEED TO COMPLETE */
















/** Right Side View */
// traverse only the right side of the BT
// want to push node values into an arr to be returned 
// strictly right side, but including root
function rightSideView (root) {
  if (!root) return []
  let rightSide = [root.val]
  if (root.left && !root.right) return [root.val, root.left.val]
  let currentNode = root
  while (currentNode.right) {
    rightSide.push(currentNode.right.val)
    currentNode = currentNode.right
  }
  return rightSide
}

// const node4 = new TreeNode(4)
// const node3 = new TreeNode(3, null, node4)
// const node5 = new TreeNode(5)
// const node2 = new TreeNode(2, null, node5)
// const node1 = new TreeNode(1, node2, node3)


// const nodeTwo = new TreeNode(2)
// const treeOne = new TreeNode(1, nodeTwo)
// console.log("Test Case1: ", rightSideView(node1));
// console.log("Test Case2: ", rightSideView(treeOne)); // [1, 2]






