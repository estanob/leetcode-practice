/** House Robber */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(...nums);
  if (nums.length === 3) return Math.max((nums[0] + nums[2]), nums[1]);
  let maxSteal = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let currentHouse = nums[i];
    // console.log("Current House:", currentHouse)
    maxSteal = Math.max(maxSteal, calculateSteal(currentHouse, i, nums));
  }
  // console.log("Max Steal:", maxSteal)
  return maxSteal;
};

var calculateSteal = function (currentHouse, idx, arr) {
  // console.log("Arr:", arr)
  let totalSteal = currentHouse;
  // console.log("Total Stea:", totalSteal)
  for (let j = idx + 2; j < arr.length; j+= 2) {
    totalSteal += arr[j];
  };
  // console.log("Total Steal:", totalSteal)
  return totalSteal;
}

let nums1 = [1,2,3,1];
let nums2 = [2,7,9,3,1];

console.log("Test Case1:", rob(nums1));
console.log("Test Case2:", rob(nums2));