// nums1 = [1,2,3,1]
// nums2 = [1,2,3,4]
// nums3 = [1,1,1,3,3,4,3,2,4,2]

const containsDuplicate = function (nums) {
  let counts = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!counts[num]) {
      counts[num] = 1
    } else {
      counts[num]++
    }
  }
  console.log(counts)
  for (let count in counts) {
    if (counts[count] > 1) return true;
  }
  return false;
}

// console.log("Test Case1:", containsDuplicate(nums1));
// console.log("Test Case2:", containsDuplicate(nums2));
// console.log("Test Case3:", containsDuplicate(nums3));










// let nums1 = [3,0,1]
// let nums2 = [0,1]
// let nums3 = [9,6,4,2,3,5,7,0,1]
// let nums4 = [0]

const missingNumber = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) return i;
  }
}

// console.log("Test Case1:", missingNumber(nums1));
// console.log("Test Case2:", missingNumber(nums2));
// console.log("Test Case3:", missingNumber(nums3));
// console.log("Test Case4:", missingNumber(nums4));











/** Find All Numbers Disappeared in an Array */
// let nums1 = [4,3,2,7,8,2,3,1];
// let nums2 = [1,1];

var findDisappearedNums = function (nums) {
  let missingNums = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) missingNums.push(i)
  }
  return missingNums;
};

// console.log("Test Case1:", findDisappearedNums(nums1));
// console.log("Test Case2:", findDisappearedNums(nums2));















/** Single Number */
// let nums1 = [2,2,1];
// let nums2 = [4,1,2,1,2];
// let nums3 = [1];

var singleNumber = function (nums) {
  if (nums.length === 1) return nums.shift()
  let numCounts = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!numCounts[num]) {
      numCounts[num] = 1;
    } else {
      numCounts[num]++;
    };
  };

  for (let count in numCounts) {
    if (numCounts[count] === 1) return count;
  }
};

// console.log("Test Case1:", singleNumber(nums1));
// console.log("Test Case2:", singleNumber(nums2));
// console.log("Test Case3:", singleNumber(nums3));














/** Product of Array Except Self */
let nums1 = [1,2,3,4];
let nums2 = [-1,1,0,-3,3];

var productExceptSelf = function (nums) {
  let notSelfProducts = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    notSelfProducts.push(dontMultiplySelf(nums, i))
  }
  return notSelfProducts;
};

var dontMultiplySelf = function (arr, currentIdx) {
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i !== currentIdx) {
      sum *= arr[i];
    }
  }
  return sum;
}

console.log("Test Case1:", productExceptSelf(nums1));
console.log("Test Case2:", productExceptSelf(nums2));