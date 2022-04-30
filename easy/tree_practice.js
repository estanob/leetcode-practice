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
  let currentRoot = root;
  let valuesArr = [];
  while (currentRoot.left && currentRoot.right) {
    valuesArr.push(currentRoot.val);
    if (currentRoot.left.val) valuesArr.push(currentRoot.left.val);
    if (currentRoot.right.val) valuesArr.push(currentRoot.right.val);
    if (!currentRoot.left.val) {
      currentRoot = currentRoot.right;
    } else {
      currentRoot = currentRoot.left;
    };
  };
  valuesArr.sort((a, b) => a - b);
  return valuesArr;
};

const node2 = new TreeNode(2, 1, null);
const node4 = new TreeNode(4, null, null);
const node3 = new TreeNode(3, node2, node4);
const node8 = new TreeNode(8, 7, 9);
const node6 = new TreeNode(6, null, node8);
const tree1 = new TreeNode(5, node3, node6);

const tree2 = new TreeNode(5, 1, 7);

console.log("Test Case1: ", increasingBST(tree1));
console.log("Test Case2: ", increasingBST(tree2));
// console.log("Trees:", tree1, tree2);