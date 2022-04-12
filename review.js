/** Pyramid Problem */
var createPyramid = function (nums) {
  let pyramidArr = [nums];
  while (pyramidArr.length < nums.length) {
    let currentLayer = pyramidArr[pyramidArr.length - 1];
    pyramidArr.push(createLayer(currentLayer))
  }
  return pyramidArr;
}

var createLayer = function (nums) {
  let layer = [];
  for (let i = 0; i < nums.length - 1; i++) {
    let firstNum = nums[i];
    let secondNum = nums[i + 1];
    layer.push(firstNum + secondNum)
  }
  return layer;
}

let nums1 = [4, 6, 5, 10, 99];
let nums2 = [3, 3, 3];
let nums3 = [4, 4, 8, 8, 6, 6, 6];

console.log("Test Case1:", createPyramid(nums1));
console.log("Test Case2:", createPyramid(nums2));
console.log("Test Case3:", createPyramid(nums3));