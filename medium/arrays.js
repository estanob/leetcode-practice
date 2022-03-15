/** Find the duplicate number */
var findDuplicate = function (nums) {
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!numObj[num]) {
      numObj[num] = true;
    } else if (numObj[num]) {
      return num;
    };
  };
};

let nums1 = [1,3,4,2,2];
let nums2 = [3,1,3,4,2];

console.log("Test Case1:", findDuplicate(nums1));
console.log("Test Case2:", findDuplicate(nums2));