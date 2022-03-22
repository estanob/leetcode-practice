/** Majority Element */
var majorityElement = function (nums) {
  let numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!numsObj[num]) {
      numsObj[num] = 1;
    } else {
      numsObj[num]++;
    };
  };
  let maxNum = 0;
  let numKey;
  for (let number in numsObj) {
    if (numsObj[number] > maxNum) {
      maxNum = numsObj[number];
      numKey = number;
    };
  };
  return numKey;
};

let nums1 = [3,2,3];
let nums2 = [2,2,1,1,1,2,2];

console.log("Test Case1:", majorityElement(nums1));
console.log("Test Case2:", majorityElement(nums2));