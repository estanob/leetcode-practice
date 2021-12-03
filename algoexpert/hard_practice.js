let array1 = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37], target1 = 33;
let array2 = [5, 23, 111, 1], target2 = 111;
let array3 = [111, 1, 5, 23], target3 = 5;
let array4 = [71, 72, 73, 0, 1, 21, 33, 37, 45, 61], target4 = 73;
let array5 = [33, 37, 45, 61, 71, 72, 73, 355, 0, 1, 21], target5 = 355;

var shiftedBinarySearch = function (array, target) {
  return shiftedBinarySearchHelper(array, target, 0, array.length - 1);
};

var shiftedBinarySearchHelper = function (array, target, left, right) {
  if (left > right) return -1;
  const middle = Math.floor((left + right) / 2);
  const potentialMatch = array[middle];
  const leftNum = array[left];
  const rightNum = array[right];
  if (target === potentialMatch) {
    return middle;
  } else if (leftNum <= potentialMatch) {
    if (target < potentialMatch && target >= leftNum) {
      return shiftedBinarySearchHelper(array, target, left, middle - 1);
    } else {
      return shiftedBinarySearchHelper(array, target, middle + 1, right);
    };
  } else {
    if (target > potentialMatch && target <= rightNum) {
      return shiftedBinarySearchHelper(array, target, middle + 1, right);
    } else {
      return shiftedBinarySearchHelper(array, target, left, middle - 1);
    };
  };
};

console.log("Test Case1:", shiftedBinarySearch(array1, target1));
console.log("Test Case2:", shiftedBinarySearch(array2, target2));
console.log("Test Case3:", shiftedBinarySearch(array3, target3));
console.log("Test Case4:", shiftedBinarySearch(array4, target4));
console.log("Test Case5:", shiftedBinarySearch(array5, target5));