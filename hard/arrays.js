/** First Missing Positive */
var firstMissingPositive = function (nums) {
  // let firstMissing = 1;
  // nums = nums.sort((a, b) => (a < b) ? 1 : -1);
  // if (nums.includes(firstMissing)) {
  //   firstMissing++;
  // } else if (!nums.includes(firstMissing)) {
  //   return firstMissing;
  // }
  // // if (!nums.includes(firstMissing)) {
  // //   return firstMissing;
  // // } else if (nums.includes(firstMissing)) {
  // //  firstMissing++;
  // // }
  // return firstMissing;

  // using object:
  let hash = {};
  let firstMissing = 1;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num > 0) {
      hash[num] = true;
    }
  };

  for (let j = 1; j <= nums.length + 1; j++) {
    if (!hash[j]) {
      firstMissing = j;
      break;
    }
  }
  return firstMissing;
};

let nums1 = [1,2,0]; // 3
let nums2 = [3,4,-1,1]; // 2
let nums3 = [7,8,9,11,12]; // 1

console.log("Test Case1:", firstMissingPositive(nums1));
console.log("Test Case2:", firstMissingPositive(nums2));
console.log("Test Case3:", firstMissingPositive(nums3));