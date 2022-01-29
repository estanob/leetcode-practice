/** Same Tree */

class TreeNode {
  constructor (val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

var isSameTree = function(p, q) {
  if (!p || !q) return p === q
  if (p.val === q.val) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  return false;
};

let p1 = [1,2,3], q1 = [1,2,3];
let p2 = [1,2], q2 = [1,null,2];
let p3 = [1,2,1], q3 = [1,1,2];

console.log("Test Case1:", isSameTree(new TreeNode (...p1), new TreeNode (...q1)));
console.log("Test Case2:", isSameTree(new TreeNode (...p2), new TreeNode (...q2)));
console.log("Test Case3:", isSameTree(new TreeNode (...p3), new TreeNode (...q3)));