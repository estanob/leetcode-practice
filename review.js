/** Pyramid Problem */
var createNumberPyramid = function (nums) {
  let pyramidArr = [nums];
  while (pyramidArr.length < nums.length) {
    let currentLayer = pyramidArr[0];
    pyramidArr.unshift(createLayer(currentLayer))
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

// let nums1 = [4, 6, 5, 10, 99];
// let nums2 = [3, 3, 3];
// let nums3 = [4, 4, 8, 8, 6, 6, 6];

// console.log("Test Case1:", createNumberPyramid(nums1));
// console.log("Test Case2:", createNumberPyramid(nums2));
// console.log("Test Case3:", createNumberPyramid(nums3));
















/** Create N Size Pyramid */
var createNSizePyramid = function (n) {
  let nPyramid = [];
  let i = 1;
  while (i <= n) { // setting a counter
    let pyramidLayer = []; // layer to be pushed to final pyramid
    for (let j = 0; j < i; j++) pyramidLayer.push("#"); // # is element of each pyramid layer, and pushed until j === i
    nPyramid.push(pyramidLayer); // push created layer to final pyramid
    pyramidLayer = []; // empty layer for new iteration
    i++; // iterating, so increase i by 1 until i === n
  }
  return nPyramid;
};

let n1 = 10;
let n2 = 3;
let n3 = 8;

console.log("Test Case1:", createNSizePyramid(n1));
console.log("Test Case2:", createNSizePyramid(n2));
console.log("Test Case3:", createNSizePyramid(n3));