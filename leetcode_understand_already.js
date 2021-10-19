/** Contains Duplicate */
// let nums1 = [1,2,3,1];
// let nums2 = [1,2,3,4];
// let nums3 = [1,1,1,3,3,4,3,2,4,2];

var containsDuplicate = function (nums) {
  let numCount = {};
  for (let i = 0; i < nums.length; i++) {
    if (!numCount[nums[i]]) {
      numCount[nums[i]] = 1
    } else {
      numCount[nums[i]]++
    }
  }
  for (let counts in numCount) {
    if (numCount[counts] > 1) {
      return true;
    }
  }
  return false;
}

// console.log("Test Case1:", containsDuplicate(nums1));
// console.log("Test Case2:", containsDuplicate(nums2));
// console.log("Test Case3:", containsDuplicate(nums3));









/** 3 Sum */
// let nums1 = [-1,0,1,2,-1,-4];
// let nums2 = [];
// let nums3 = [0];

var threeSum = function (nums) {
  if (nums.length < 3) return [];
  let threeResult = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 2; j++) {
      for (let k = 0; k < nums.length - 1; k++) {
        if (i < j && j < k && i < k) {
          if (nums[i] + nums[j] + nums[k] === 0) {
            let sumAns = [nums[i], nums[j], nums[k]].sort((a, b) => a - b)
            if (!threeResult.includes(sumAns)) threeResult.push(sumAns)
          }
        }
      }
    }
  }
  return threeResult;
}

// console.log("Test Case1:", threeSum(nums1));
// console.log("Test Case2:", threeSum(nums2));
// console.log("Test Case3:", threeSum(nums3));





/** Missing Nummer */
// let nums1 = [3,0,1];
// let nums2 = [0,1];
// let nums3 = [9,6,4,2,3,5,7,0,1];
// let nums4 = [0];

var missingNumber = function(nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) return i;
  }
};







/** Valid Palindrome */
// let s = "A man, a plan, a canal: Panama";
// let s = "race a car";

var isPalindrome = function(s) {
  let lowerCaseLetters = s.toLowerCase().split("");
    let allLetters = [];
    for (let i = 0; i < lowerCaseLetters.length; i++) {
    if (alphabet.includes(lowerCaseLetters[i])) {
      allLetters.push(lowerCaseLetters[i])
    }
  }
  return allLetters.join("") === allLetters.reverse().join("")
};

// const alphabet = [
//   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
//   'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
// ];









/** House Robber */
// let nums1 = [1,2,3,1];
// let nums2 = [2,7,9,3,1];

var rob = function (nums) {
  let maxSteal = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < j && j - i > 1) {
        maxSteal = Math.max(maxSteal, nums[i] + nums[j])
      }
    }
  }
  return maxSteal;
}

// console.log("Test Case1:", rob(nums1));
// console.log("Test Case2:", rob(nums2));











/** Word Break */
let s1 = "leetcode"
let wordDict1 = ["leet","code"];                     // true

let s2 = "applepenapple"
let wordDict2 = ["apple","pen"];               //  true  

let s3 = "catsandog"
let wordDict3 = ["cats","dog","sand","and","cat"]  // false


var wordBreak = function (s, wordDict) {
  let sCopy = s;
  let copyHolder;
  const howManyWords = wordDict.length;
  // for (let i = 0; i < s.length; i++) {
  //   if (sCopy.includes(wordDict[i % wordDict.length])) {
  //     sCopy = sCopy.slice(0, sCopy.indexOf(wordDict[i % wordDict.length]), wordDict[i % wordDict.length].length)
  //   } else {
  //     return false;
  //   }
  // }
  while (sCopy.length > 0) {
    for (let i = 0; i < s.length; i++) {
      if (sCopy.includes(wordDict[i % howManyWords])) {
        copyHolder = sCopy;
        sCopy = copyHolder.slice(0, sCopy.indexOf(wordDict[i % howManyWords]))
        sCopy += copyHolder.slice(sCopy.indexOf(wordDict[i % howManyWords]) + 1)
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log("Test Case1:", wordBreak(s1, wordDict1));
console.log("Test Case2:", wordBreak(s2, wordDict2));
console.log("Test Case3:", wordBreak(s3, wordDict3));