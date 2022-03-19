/** Binary search */
var search = function (nums, target) {
  // let numsHalfway = Math.floor(nums.length / 2);
  // if (nums[numsHalfway] === target) return numsHalfway;
  // let leftSearch = nums.slice(0, numsHalfway);
  // let rightSearch = nums.slice(numsHalfway);
  // if (nums[numsHalfway] < target) {
  //   search(rightSearch, target);
  // } else {
  //   search(leftSearch, target);
  // }
  // return -1;

  let lower = 0;
  let upper = nums.length - 1;
  while (lower <= upper) {                                // alg will keep running until lower <= upper
    const middle = lower + Math.floor((upper - lower) / 2);
    if (target === nums[middle]) return middle;          // if this condition is met, then we are done and simply return the middle index
    if (target < nums[middle]) {
      upper = middle - 1; // <= we are eliminating the right half of nums
    } else {
      lower = middle + 1; // <= we are eliminating the left half of nums
    }
  }
  return -1;  // <= if the target does not exist in nums, return -1;
};

let nums1 = [-1,0,3,5,9,12], target1 = 9; // => 4
let nums2 = [-1,0,3,5,9,12], target2 = 2; // => -1

console.log("Test Case1:", search(nums1, target1));
console.log("Test Case2:", search(nums2, target2));