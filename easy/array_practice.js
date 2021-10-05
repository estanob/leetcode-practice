/** Squares of a sorted Array */

// let nums1 = [-4,-1,0,3,10];
// let nums2 = [-7,-3,2,3,11];

var sortedSquares = function(nums) {
  let squares = nums.map(num => num * num)
  squares.sort((a, b) => a - b)
  return squares;
};

// console.log("First test case: ", sortedSquares(nums1), "Second test case: ", sortedSquares(nums2))




/** Count Negative Numbers in a Sorted Matrix */

// let grid1 = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
// let grid2 = [[3,2],[1,0]];
// let grid3 = [[1,-1],[-1,-1]];
// let grid4 = [[-1]];

var countNegatives = function(grid) {
  let howMany = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j< grid[0].length; j++) {
          if (grid[i][j] < 0) howMany++
      }
  }
  return howMany;
};

// console.log("Test Case: 1", countNegatives(grid1))
// console.log("Test Case: 2", countNegatives(grid2))
// console.log("Test Case: 3", countNegatives(grid3))
// console.log("Test Case: 4", countNegatives(grid4))






/** How Many Numbers Are Smaller Than the Current Number */

// let nums1 = [8,1,2,2,3];
// let nums2 = [6,5,4,8];
// let nums3 = [7,7,7,7];

var smallerNumbersThanCurrent = function(nums) {
  let smallerNums = [];
  for (let i = 0; i < nums.length; i++) {
      let howMany = 0;
      for (let j = 0; j < nums.length; j++) {
          if (i !== j) {
              if (nums[i] > nums[j]) howMany++
          }
      }
      smallerNums.push(howMany)
  }
  return smallerNums;
};

// console.log("Test case 1: ", smallerNumbersThanCurrent(nums1));
// console.log("Test case2 : ", smallerNumbersThanCurrent(nums2));
// console.log("Test case3 : ", smallerNumbersThanCurrent(nums3));






/** Find the Highest Altitude */
// let gain1 = [-5,1,5,0,-7];
// let gain2 = [-4,-3,-2,-1,4,3,2];

var largestAltitude = function(gain) {
  let altitudes = [0, gain[0]];
  for (let i = 1; i < gain.length; i++) {
      altitudes.push(altitudes[altitudes.length - 1] + gain[i])
  }
  let maxAlt = altitudes[0]
  for (let j = 1; j < altitudes.length; j++) {
      if (altitudes[j] > maxAlt) {
          maxAlt = altitudes[j]
      }
  }
  return maxAlt
};

// console.log("Test case1: ", largestAltitude(gain1));
// console.log("Test case2: ", largestAltitude(gain2));






/** Two Sum */
let nums1 = [2,7,11,15];
let target1 = 9;

let nums2 = [3,2,4];
let target2 = 6;

let nums3 = [3,3];
let target3 = 6;

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};

console.log("Test case1: ", twoSum(nums1, target1));
console.log("Test case2: ", twoSum(nums2, target2));
console.log("Test case3: ", twoSum(nums3, target3));