// let array1 = [3, 5, -4, 8, 11, 1, -1, 6], targetSum1 = 10;
// let array2 = [4, 6, 1], targetSum2 = 5;
// let array3 = [4, 6, 1, -3], targetSum3 = 3;
// let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9], targetSum4 = 17;
// let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], targetSum5 = 18;
// let array6 = [-7, -5, -3, -1, 0, 1, 3, 5, 7], targetSum6 = -5;

var twoNumberSum = function (array, targetSum) {
  let twoNums = [];
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++) {
      if (i < j && array[i] + array[j] === targetSum) {
        twoNums.push(array[i], array[j])
      }
    }
  }
  return twoNums;
}

// console.log("Test Case1:", twoNumberSum(array1, targetSum1));
// console.log("Test Case2:", twoNumberSum(array2, targetSum2));
// console.log("Test Case3:", twoNumberSum(array3, targetSum3));
// console.log("Test Case4:", twoNumberSum(array4, targetSum4));
// console.log("Test Case5:", twoNumberSum(array5, targetSum5));











/** Validate Subsequence */
// let array1 = [5, 1, 22, 25, 6, -1, 8, 10], sequence1 = [1, 6, -1, 10];
// let array2 = [5, 1, 22, 25, 6, -1, 8, 10], sequence2 = [5, 1, 22, 25, 6, -1, 8, 10];
// let array3 = [5, 1, 22, 25, 6, -1, 8, 10], sequence3 = [5, 1, 22, 6, -1, 8, 10];
// let array4 = [5, 1, 22, 25, 6, -1, 8, 10], sequence4 = [22, 25, 6];
// let array5 = [5, 1, 22, 25, 6, -1, 8, 10], sequence5 = [1, 6, 10];
// let array6 = [5, 1, 22, 25, 6, -1, 8, 10], sequence6 = [25];

var isValidSubsequence = function (array, sequence) {
  // if (sequence.length === 1) {
  //   return array.includes(sequence[0]) ? true : false;
  // }
  // for (let i = 0; i < sequence.length - 1; i++) {
  //   if (array.indexOf(sequence[i]) > array.indexOf(sequence[i + 1])) return false
  // }
  // return true;

}

// console.log("Test Case1:", isValidSubsequence(array1, sequence1));
// console.log("Test Case2:", isValidSubsequence(array2, sequence2));
// console.log("Test Case3:", isValidSubsequence(array3, sequence3));
// console.log("Test Case4:", isValidSubsequence(array4, sequence4));
// console.log("Test Case5:", isValidSubsequence(array5, sequence5));
// console.log("Test Case6:", isValidSubsequence(array6, sequence6));











/** Palindrome Check */
// let string1 = "abcdcba";
// let string2 = "abcdcba";
// let string3 = "abcdefghhgfedcba";
// let string4 = "abcdefghihgfedcba";
// let string5 = "abcdefghihgfeddcba";

var isPalindrome = function (string) {
  return string === string.split("").reverse().join("")
};

// console.log("Test Case1:", isPalindrome(string1));
// console.log("Test Case2:", isPalindrome(string2));
// console.log("Test Case3:", isPalindrome(string3));
// console.log("Test Case4:", isPalindrome(string4));
// console.log("Test Case5:", isPalindrome(string5));














/** Move Element to End */
// let array1 = [2, 1, 2, 2, 2, 3, 4, 2], toMove1 = 2;
// let array2 = [], toMove2 = 3;
// let array3 = [1, 2, 4, 5, 6], toMove3 = 3;
// let array4 = [3, 3, 3, 3, 3], toMove4 = 3;
// let array5 = [3, 1, 2, 4, 5], toMove5 = 3;
// let array6 = [1, 2, 3, 4, 5], toMove6 = 3;

var moveElementToEnd = function (array, toMove) {
  if (!array.includes(toMove)) return array;
  let notMove = [];
  let moving = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === toMove) {
      moving.push(array[i]);
    } else {
      notMove.push(array[i]);
    }
  }
  return notMove.concat(moving);
}

// console.log("Test Case1:", moveElementToEnd(array1, toMove1));
// console.log("Test Case2:", moveElementToEnd(array2, toMove2));
// console.log("Test Case3:", moveElementToEnd(array3, toMove3));
// console.log("Test Case4:", moveElementToEnd(array4, toMove4));
// console.log("Test Case5:", moveElementToEnd(array5, toMove5));
// console.log("Test Case6:", moveElementToEnd(array6, toMove6));











/** Class Photo */
// let redShirtHeights1 = [5, 8, 1, 3, 4];
// let blueShirtHeights1 = [6, 9, 2, 4, 5];

// let redShirtHeights2 = [6, 9, 2, 4, 5];
// let blueShirtHeights2 = [5, 8, 1, 3, 4];

// let redShirtHeights3 = [6, 9, 2, 4, 5, 1];
// let blueShirtHeights3 = [5, 8, 1, 3, 4, 9];

var classPhotos = function (redShirtHeights, blueShirtHeights) {
  redShirtHeights = redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights = blueShirtHeights.sort((a, b) => b - a);
  let firstRowColor = redShirtHeights[0] < blueShirtHeights[0] ? "RED" : 'BLUE'
  for (let i = 0; i < redShirtHeights.length; i++) {
    if (firstRowColor === "RED") {
      if (redShirtHeights[i] >= blueShirtHeights[i]) return false;
    } else {
      if (redShirtHeights[i] <= blueShirtHeights[i]) return false;
    }
  }
  return true;
};

// console.log("Test Case1:", classPhotos(redShirtHeights1, blueShirtHeights1));
// console.log("Test Case2:", classPhotos(redShirtHeights2, blueShirtHeights2));
// console.log("Test Case3:", classPhotos(redShirtHeights3, blueShirtHeights3));













/** Sorted Matrix */
let matrix1 = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004]
], target1 = 44

let matrix2 = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004]
], target2 = 1

let matrix3 = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004]
], target3 = 2

let matrix4 = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004]
], target4 = 4

let matrix5 = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004]
], target5 = 15

let matrix6 = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004]
], target6 = 12

var searchInSortedMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let subArr = matrix[i]
    for (let j = 0; j < subArr.length; j++) {
      if (subArr[j] === target) return [i, j];
    };
  };
  return [-1, -1];
};

console.log("Test Case1:", searchInSortedMatrix(matrix1, target1));
console.log("Test Case2:", searchInSortedMatrix(matrix2, target2));
console.log("Test Case3:", searchInSortedMatrix(matrix3, target3));
console.log("Test Case4:", searchInSortedMatrix(matrix4, target4));
console.log("Test Case5:", searchInSortedMatrix(matrix5, target5));
console.log("Test Case6:", searchInSortedMatrix(matrix6, target6));