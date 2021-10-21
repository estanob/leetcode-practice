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
let array1 = [5, 1, 22, 25, 6, -1, 8, 10], sequence1 = [1, 6, -1, 10];
let array2 = [5, 1, 22, 25, 6, -1, 8, 10], sequence2 = [5, 1, 22, 25, 6, -1, 8, 10];
let array3 = [5, 1, 22, 25, 6, -1, 8, 10], sequence3 = [5, 1, 22, 6, -1, 8, 10];
let array4 = [5, 1, 22, 25, 6, -1, 8, 10], sequence4 = [22, 25, 6];
let array5 = [5, 1, 22, 25, 6, -1, 8, 10], sequence5 = [1, 6, 10];
let array6 = [5, 1, 22, 25, 6, -1, 8, 10], sequence6 = [25];

var isValidSubsequence = function (array, sequence) {
  if (sequence.length === 1) {
    return array.includes(sequence[0]) ? true : false;
  }
  for (let i = 0; i < sequence.length - 1; i++) {
    if (array.indexOf(sequence[i]) > array.indexOf(sequence[i + 1])) return false
  }
  return true;
}

console.log("Test Case1:", isValidSubsequence(array1, sequence1));
console.log("Test Case2:", isValidSubsequence(array2, sequence2));
console.log("Test Case3:", isValidSubsequence(array3, sequence3));
console.log("Test Case4:", isValidSubsequence(array4, sequence4));
console.log("Test Case5:", isValidSubsequence(array5, sequence5));
console.log("Test Case6:", isValidSubsequence(array6, sequence6));