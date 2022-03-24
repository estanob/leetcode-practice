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

// let nums1 = [1,3,4,2,2];
// let nums2 = [3,1,3,4,2];

// console.log("Test Case1:", findDuplicate(nums1));
// console.log("Test Case2:", findDuplicate(nums2));















/** Rotated Binary Search */
var rotatedSearch = function (nums, target) {
  /** Need to study this solution */
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) { // <-- This will reduce the input size until the solution is reached
    let halfPoint = Math.floor((left + right) / 2);
    if (nums[halfPoint] === target) return halfPoint; // simply return halfPoint if it is the index of the target
    if (nums[left] <= nums[halfPoint]) { // <-- This check is to see if the nums array is sorted on the left half
      if (nums[left] <= target && target <= nums[halfPoint]) { // <-- eliminate the right half of nums 
        right = halfPoint - 1;
      } else {
        left = halfPoint + 1; // <-- eliminate the left half of nums
      };
    } else { // <-- nums array is sorted on the right half
      if (nums[halfPoint] <= target && target <= nums[right]) {
        left = halfPoint + 1; // <-- eliminate the left half of nums
      } else {
        right = halfPoint - 1; // <-- eliminate the right half of nums
      };
    };
  };
  return -1; // <-- if none of the above conditions are met, this means that the target is not found in the given array, so return -1
};

let nums1 = [4,5,6,7,0,1,2], target1 = 0;
let nums2 = [4,5,6,7,0,1,2], target2 = 3;
let nums3 = [1], target3 = 0;

console.log("Test Case1:", rotatedSearch(nums1, target1));
console.log("Test Case2:", rotatedSearch(nums2, target2));
console.log("Test Case3:", rotatedSearch(nums3, target3));