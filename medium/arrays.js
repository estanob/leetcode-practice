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

// let nums1 = [4,5,6,7,0,1,2], target1 = 0;
// let nums2 = [4,5,6,7,0,1,2], target2 = 3;
// let nums3 = [1], target3 = 0;

// console.log("Test Case1:", rotatedSearch(nums1, target1));
// console.log("Test Case2:", rotatedSearch(nums2, target2));
// console.log("Test Case3:", rotatedSearch(nums3, target3));




/** Search in Rotated Array II */
var rotatedSearchII = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let halfway = Math.floor((left + right) / 2);
    console.log("left =", left, "right =", right)
    if (nums[halfway] === target) return true;
    if (nums[left] <= nums[halfway]) {
      if (nums[left] <= target && target <= nums[halfway]) {
        right = halfway - 1;
      } else {
        left = halfway + 1;
      };
    } else {
      if (nums[halfway] <= target && target <= nums[right]) {
        left = halfway + 1;
      } else {
        right = halfway - 1;
      };
    };
  };
  return false;
};

// let nums1 = [2,5,6,0,0,1,2], target1 = 0; // true
// let nums2 = [2,5,6,0,0,1,2], target2 = 3; // false

// console.log("Test Case1:", rotatedSearchII(nums1, target1));
// console.log("Test Case2:", rotatedSearchII(nums2, target2));
// console.log("Test Case3:", rotatedSearchII([1,0,1,1,1], 0));




















/** Reduce Array Size to the Half */
var minSetSize = function (arr) {
  let halfSize = arr.length / 2;
  /* if (halfSize === 1) return 1;
  let reductionSize = 0;
  let reductionCounter = 0;
  let countValues = Object.values(getNumsCount(arr));
  countValues.sort((a, b) => b - a);
  console.log(`Count Values: ${countValues}`);
  for (let i = 0; i < countValues.length; i++) {
    let numVal = countValues[i];
    console.log(`Reduction Size: ${reductionSize}, Half Size: ${halfSize}`);
    while (reductionSize <= halfSize) {
      reductionSize += numVal;
      reductionCounter++;
    };
  };
  return reductionCounter; */
  // console.log(`Half Size: ${halfSize}`);
  const numsCount = Object.values(getNumsCount(arr)).sort((a, b) => b - a);
  // console.log(`Nums Count: ${numsCount}`);
  let setSize = 0;
  if (numsCount[0] >= halfSize) return 1;
  for (let i = 0; i < numsCount.length; i++) {
    // console.log(`i = ${i}`);
    let numCount = numsCount[i];
    if (halfSize > 0) {
      // console.log(`Half Count: ${halfCount}, Set Size: ${setSize}`);
      setSize++;
      halfSize -= numCount;
    } else {
      return setSize;
    }
  }
  // console.log(`Half Count: ${halfCount}`);
  // return setSize;
};

var getNumsCount = function (arr) {
  let eleCounts = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (!eleCounts[num]) {
      eleCounts[num] = 1;
    } else {
      eleCounts[num]++;
    };
  };
  return eleCounts;
};

// let arr1 = [3,3,3,3,5,5,5,2,2,7]; // -> 2
// let arr2 = [7,7,7,7,7,7]; // -> 1

// console.log("Test Case1: ", minSetSize(arr1));
// console.log("Test Case2: ", minSetSize(arr2));
// console.log("Test Case3: ", minSetSize([9,77,63,22,92,9,14,54,8,38,18,19,38,68,58,19])); // -> 5
// console.log("Test Case4: ", minSetSize([1000,1000,3,7]));