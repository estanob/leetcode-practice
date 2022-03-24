/** Find All Duplicates in an Array */
/** What is the question asking?
 * I must write an algorithm that takes in an array and return a new array with 
 * elements that occur twice in the input array. This algorithm needs to run in
 * O(n) time and O(1) space.
 */

// var findDuplicates = function (nums) {
//   let dups = []
//   let numsHash = findDuplicatesHelper(nums);
//   console.log("Nums Hash:", numsHash)
//   for (let key in numsHash) {
//     if (numsHash[key] > 1) dups.push(key)
//   }
//   return dups;
// };

// var findDuplicatesHelper = function (nums) {
//   let dups = {};
//   // for (let num in nums) {
//   //   if (!dups[num]) dups[num] = 1;
//   //   if (dups[num]) dups[num] += 1;
//   // }
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     if (!dups[num]) dups[num] = 1;
//     if (dups[num]) dups[num] += 1;

//   }
//   console.log("Dups", dups)
//   return dups;
// }

var findDuplicates = function (nums) {
  // let result = [];
  // let numsHash = {};
  // for (let i = 0; i < nums.length; i++) {
  //   // if (!numsHash[nums[i]]) numsHash[nums[i]] = 1
  //   // if (numsHash[nums[i]]) numsHash[nums[i]]++
  //   if (numsHash[nums[i]]) {
  //     numsHash[nums[i]]++;
  //   } else {
  //     numsHash[nums[i]] = 1;
  //   };
  // };
  // for (let numKey in numsHash) {
  //   if (numsHash[numKey] === 2) {
  //     result.push(parseInt(numKey));
  //   };
  // };
  // return result;

  /** Optimization: */
  let result = [];
  let allNums = duplicateHash(nums);
  for (let count in allNums) {
    if (allNums[count] > 1) result.push(parseInt(count));
  };
  return result;
};

var duplicateHash = function (nums) {
  /**
   * the optimized solution that uses this helper function
   * has both a time and space complexity of O(N);
   */
  let result = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!result[num]) {
      result[num] = 1;
    } else {
      result[num]++;
    };
  };
  return result;
};

let nums1 = [4,3,2,7,8,2,3,1];
let nums2 = [1,1,2];
let nums3 = [1];

console.log("Test Case1:", findDuplicates(nums1));
console.log("Test Case2:", findDuplicates(nums2));
console.log("Test Case3:", findDuplicates(nums3));