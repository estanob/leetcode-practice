/** Contains Duplicate */
// let nums1 = [1,2,3,1];
// let nums2 = [1,2,3,4];
// let nums3 = [1,1,1,3,3,4,3,2,4,2];

var containsDuplicate = function (nums) {
  let numCount = {};
  for (let i = 0; i < nums.length; i++) {
    if (!numCount[nums[i]]) {
      numCount[nums[i]] = 1
    } else {
      numCount[nums[i]]++
    }
  }
  for (let counts in numCount) {
    if (numCount[counts] > 1) {
      return true;
    }
  }
  return false;
}

// console.log("Test Case1:", containsDuplicate(nums1));
// console.log("Test Case2:", containsDuplicate(nums2));
// console.log("Test Case3:", containsDuplicate(nums3));









/** 3 Sum */
let nums1 = [-1,0,1,2,-1,-4];
let nums2 = [];
let nums3 = [0];

var threeSum = function (nums) {
  if (nums.length < 3) return [];
  let threeResult = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 2; j++) {
      for (let k = 0; k < nums.length - 1; k++) {
        if (/**i !== j && j !== k && i !== k &&*/ i < j && j < k && i < k) {
        // if (i < j && j < k && i !== j && j !== k && i !== k) {
          // if (nums[i] + nums[j] + nums[k] === 0) threeResult.push([nums[i], nums[j], nums[k]])
          if (nums[i] + nums[j] + nums[k] === 0) {
            let sumAns = [nums[i], nums[j], nums[k]].sort((a, b) => a - b)
            // let sumAns = [nums[i], nums[j], nums[k]]
            // sumAns = sumAns.sort((a, b) => a - b)
            if (!threeResult.includes(sumAns)) threeResult.push(sumAns)
          }
        }
      }
    }
  }
  return threeResult;
}

console.log("Test Case1:", threeSum(nums1));
console.log("Test Case2:", threeSum(nums2));
console.log("Test Case3:", threeSum(nums3));