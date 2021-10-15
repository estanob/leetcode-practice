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
 */



 
 
 
 
 
 
 





 /** Product of Array Except Self */
// let nums1 = [1,2,3,4];
// let nums2 = [-1,1,0,-3,3];

var productExceptSelf = function (nums) {
  let products = [];
  let numsCopy = nums
  for (let i = 0; i < numsCopy.length; i++) {
    let selfIdx = i;
    products.push(multiplyOthers(numsCopy, selfIdx))
  }
  return products;
}

var multiplyOthers = function (arr, selfIdx) {
  let multAns = 1;
  let reducedArr = arr.splice(selfIdx);
  for (let i = 0; i < reducedArr.length; i++) {
    let indivNum = reducedArr[i]
    multAns *= indivNum;
  }
  return multAns;
}

// console.log("Test Case1:", productExceptSelf(nums1));
// console.log("Test Case2:", productExceptSelf(nums2));