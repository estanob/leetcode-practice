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










let nums1 = [3,0,1]
let nums2 = [0,1]
let nums3 = [9,6,4,2,3,5,7,0,1]
let nums4 = [0]

const missingNumber = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) return i;
  }
}

console.log("Test Case1:", missingNumber(nums1));
console.log("Test Case2:", missingNumber(nums2));
console.log("Test Case3:", missingNumber(nums3));
console.log("Test Case4:", missingNumber(nums4));