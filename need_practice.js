/**
 * 
 * SOLVED, BUT NEED TO REVIEW
 * 
 * 
 Best Time to Buy and Sell Stock
 // let prices1 = [7,1,5,3,6,4];
 // let prices2 = [7,6,4,3,1];
 
 var maxProfit = function (prices) {
   let bestBuy = 0;
   let cheapestStock = prices[0];
   for (let i = 1; i < prices.length; i++) {
     let stock = prices[i]
     if (cheapestStock > stock) cheapestStock = stock
     if (stock - cheapestStock > bestBuy) bestBuy = stock - cheapestStock
   }
   return bestBuy;
 }
 
 // console.log("Test Case1:", maxProfit(prices1));
 // console.log("Test Case2:", maxProfit(prices2));






Valid Anagram
let s1 = "anagram", t1 = "nagaram";
let s2 = "rat", t2 = "car";

var isAnagram = function (s, t) {
  let sLetters = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    sLetters[s[i]] = sLetters[s[i]] ? sLetters[s[i]] + 1 : 1;
    sLetters[t[i]] = sLetters[t[i]] ? sLetters[t[i]] - 1 : -1;
  }
  for (let letters in sLetters) {
    if (sLetters[letters] !== 0) return false;
  };
  return true;
}

console.log("Test Case1:", isAnagram(s1, t1));
console.log("Test Case2:", isAnagram(s2, t2));
 
 





Search in Rotated Sorted Array
let nums1 = [4,5,6,7,0,1,2], target1 = 0
let nums2 = [4,5,6,7,0,1,2], target 2= 3

var search = function(nums, target) {
  return nums.indexOf(target)
};




 
 
 
 
 
 
 





 /** Product of Array Except Self */
// let nums1 = [1,2,3,4];
// let nums2 = [-1,1,0,-3,3];

var productExceptSelf = function (nums) {
  let products = [];
  for (let i = 0; i < nums.length; i++) {
    products.push(parseInt(multiplyOthers(nums, i)))
  }
  return products;
}

var multiplyOthers = function (arr, selfIdx) {
  let multAns = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i !== selfIdx) {
      multAns *= arr[i]
    }
  }
  return multAns;
}

// console.log("Test Case1:", productExceptSelf(nums1));
// console.log("Test Case2:", productExceptSelf(nums2));








/** Container with Most Water */
// let height1 = [1,8,6,2,5,4,8,3,7];
// let height2 = [1,1];
// let height3 = [4,3,2,1,4];
// let height4 = [1,2,1];

var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = height.length - 1; j >= 0; j--) {
      if (i < j && ((j - i) * Math.min(height[i], height[j]) > max)) {
        max = (j - i) * Math.min(height[i], height[j])
      }
    }
  }
  return max;
}

// console.log("Test Case1:", maxArea(height1));
// console.log("Test Case2:", maxArea(height2));
// console.log("Test Case3:", maxArea(height3));
// console.log("Test Case4:", maxArea(height4));









/** Find Minimum in Rotated Sorted Array */
// let nums1 = [3,4,5,1,2];
// let nums2 = [4,5,6,7,0,1,2];
// let nums3 = [11,13,15,17];

var findMin = function (nums) {
  return nums.sort((a, b) => a - b)[0];
}

// console.log("Test Case1:", findMin(nums1));
// console.log("Test Case2:", findMin(nums2));
// console.log("Test Case3:", findMin(nums3));