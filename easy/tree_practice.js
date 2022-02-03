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

const p1 = new TreeNode (1, 2, 3), q1 = new TreeNode (1, 2, 3);
const p2 = new TreeNode (1, 2), q2 = new TreeNode (1, null, 2);
const p3 = new TreeNode (1, 2, 1), q3 = new TreeNode (1, 1, 2);

console.log("Test Case1:", isSameTree(p1, q1));
console.log("Test Case2:", isSameTree(p2, q2));
console.log("Test Case3:", isSameTree(p3, q3));