/** Contains Duplicate */

// let nums1 = [1,2,3,1];
// let nums2 = [1,2,3,4];
// let nums3 = [1,1,1,3,3,4,3,2,4,2];

var containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true
      }
    }
  }
  return false
};

// console.log("Test Case1: ", containsDuplicate(nums1));
// console.log("Test Case2: ", containsDuplicate(nums2));
// console.log("Test Case3: ", containsDuplicate(nums3));



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
// let nums1 = [2,7,11,15];
// let target1 = 9;

// let nums2 = [3,2,4];
// let target2 = 6;

// let nums3 = [3,3];
// let target3 = 6;

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};

// console.log("Test case1: ", twoSum(nums1, target1));
// console.log("Test case2: ", twoSum(nums2, target2));
// console.log("Test case3: ", twoSum(nums3, target3));









/**Two Sum II - Input array is sorted */
// let numbers1 = [2,7,11,15];
// let target1 = 9;

// let numbers2 = [2,3,4];
// let target2 = 6;

// let numbers3 = [-1,0];
// let target3 = -1;

var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i < j && numbers[i] + numbers[j] === target) {
        return [(i + 1), (j + 1)];
      }
    }
  }
}

// console.log("Test Case1: ", twoSum(numbers1, target1));
// console.log("Test Case2: ", twoSum(numbers2, target2));
// console.log("Test Case3: ", twoSum(numbers3, target3));







// let nums1 = [1,2,3,1];
// let k1 = 3;

// let nums2 = [1,0,1,1];
// let k2 = 1;

// let nums3 = [1,2,3,1,2,3];
// let k3 = 2;

var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < j && nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
}

// console.log("Test Case1: ", containsNearbyDuplicate(nums1, k1))
// console.log("Test Case2: ", containsNearbyDuplicate(nums2, k2))
// console.log("Test Case3: ", containsNearbyDuplicate(nums3, k3))







/** Missing Number */

// let nums1 = [3,0,1];
// let nums2 = [0,1];
// let nums3 = [9,6,4,2,3,5,7,0,1];
// let nums4 = [0];

var missingNumber = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) return i;
  }
}

// console.log("Test Case1: ", missingNumber(nums1))
// console.log("Test Case2: ", missingNumber(nums2))
// console.log("Test Case3: ", missingNumber(nums3))
// console.log("Test Case4: ", missingNumber(nums4))






/** Move Zeroes */
// let nums1 = [0,1,0,3,12];
// let nums2 = [0];

var moveZeroes = function(nums) {
  let organized = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (num !== 0) organized.push(num)
  }
  for (let j = 0; j <= (nums.length - organized.length); j++) {
    organized.push(0)
  }
  return organized;
}

// console.log("Test Case1: ", moveZeroes(nums1));
// console.log("Test Case2: ", moveZeroes(nums2));







/** Find All Numbers Disappeared in an Array */

// let nums1 = [4,3,2,7,8,2,3,1];
// let nums2 = [1,1];

var findDisappearedNumbers = function(nums) {
  let missingNums = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i) && !missingNums.includes(i)) {
      missingNums.push(i)
    }
  }
  return missingNums;
}

// console.log("Test Case1: ", findDisappearedNumbers(nums1))
// console.log("Test Case2: ", findDisappearedNumbers(nums2))





































/*******
 * REVIEW
 * ******/




/** Assign Cookies */
// let g1 = [1,2,3];
// let s1 = [1,1];

// let g2 = [1,2];
// let s2 = [1,2,3];

var findContentChildren = function(g, s) {
  let happyNum = 0;
  for (let i = 0; i < Math.floor(g.length, s.length); i++) {
    if (g[i] === s[i]) happyNum++
  }
  return happyNum;
}

// console.log("Test Case1:", findContentChildren(g1, s1));
// console.log("Test Case2:", findContentChildren(g2, s2));








/** Keyboard Row */
let words1 = ["Hello","Alaska","Dad","Peace"];
let words2 = ["omk"];
let words3 = ["adsdf","sfd"];

const firstRow =  ["q", "w", "e", "r", "t", "y", "u", "i", "o", 'p'];
const secondRow =  ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const thirdRow =  ["z", "x", "c", "v", "b", "n", "m"];

var findWords = function (words) {
  let canType = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase()
    if (canBeTyped(word, firstRow) || canBeTyped(word, secondRow) || canBeTyped(word, thirdRow)) {
      canType.push(words[i])
    }
  }
  return canType;
}

var canBeTyped = function (word, row) {
  for (let i = 0; i < word.length; i++) {
    if (!row.includes(word[i])) return false;
  }
  return true;
}

console.log("Test Case1:", findWords(words1));
console.log("Test Case2:", findWords(words2));
console.log("Test Case3:", findWords(words3));

















































































































































































































































































































































/**
 * MOST IMPORTANT TO STUDY
 * 
 * 
 * Island Perimeter
 * 
 * 
 * You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
 * 
 * 
 */
