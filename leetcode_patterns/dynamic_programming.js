/** House Robber */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  /*
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

  /**
   * [2, 7, 9, 3, 1]              i = 4
   * table = [2, 7, 11, 10, 12]   10, 12
   * 12
   */

  const stealTable = Array(nums.length);
  stealTable[0] = nums[0];
  stealTable[1] = nums[1];

  for (let i = 2; i < nums.length; i++) {
    if (i === 2) {
      stealTable[i] = nums[i] + table[i - 2];
    } else {
      stealTable[i] = nums[i] + Math.max(stealTable[i - 2], stealTable[i - 3]);
    };
  };
  let n = nums.length;
  return Math.max(stealTable[n - 1], stealTable[n - 2]);
};

// var calculateSteal = function (currentHouse, idx, arr) {
//   // console.log("Arr:", arr)
//   let totalSteal = currentHouse;
//   // console.log("Total Stea:", totalSteal)
//   for (let j = idx + 2; j < arr.length; j+= 2) {
//     totalSteal += arr[j];
//   };
//   // console.log("Total Steal:", totalSteal)
//   return totalSteal;
// }

// let nums1 = [1,2,3,1];
// let nums2 = [2,7,9,3,1];
// let nums3 = [5,1,2,9]; // -> 14
// let nums4 = [5,1,2,3,9]; // -> 16

// console.log("Test Case1:", rob(nums1));
// console.log("Test Case2:", rob(nums2));
// console.log("Test Case3:", rob(nums3));
// console.log("Test Case4:", rob(nums4));

























/** Longest Palindrome */
var longestPalindrome = function (s) {
  if (s.length === 1) return s;
  let longest;
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = 0; j < s.length; j++) {
      if (i <= j) {
        let subStr = s.slice(i, j + 1);
        if (longest && isPalindrome(i, j, s) && subStr.length > longest.length) {
          longest = subStr;
        } else if (!longest) {
          longest = subStr;
        };
      };
    };
  };
  return longest;
};

var isPalindrome = function (idx1, idx2, str) {
  let startPoint = idx1;
  let endPoint = idx2;
  while (startPoint < endPoint) {
    if (str[startPoint] !== str[endPoint]) {
      return false;
    };
    startPoint++;
    endPoint--;
  };
  return true;
}

let s1 = "babad";
let s2 = "cbbd";
console.log("Test Case1: ", longestPalindrome(s1));
console.log("Test Case2: ", longestPalindrome(s2));