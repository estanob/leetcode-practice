/** Monotonic Array */
// let array1 = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
// let array2 = [];
// let array3 = [1];
// let array4 = [1, 2];
// let array5 = [2, 1];
// let array6 = [-1, -5, -10, -1100, -1101, -1102, -9001];
// let array7 = [-1, -5, -10, -1100, -900, -1101, -1102, -9001];
// let array8 = [1, 2, 0];
// let array9 = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11];

var isMonotonic = function (array) {
  if (array.length < 3) return true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= array[i + 1] && array[i + 1] > array[i + 2]) return false
    if (array[i] >= array[i + 1] && array[i + 1] < array[i + 2]) return false
  };
  return true;
};

// console.log("Test Case1:", isMonotonic(array1));
// console.log("Test Case2:", isMonotonic(array2));
// console.log("Test Case3:", isMonotonic(array3));
// console.log("Test Case4:", isMonotonic(array4));
// console.log("Test Case5:", isMonotonic(array5));
// console.log("Test Case6:", isMonotonic(array6));
// console.log("Test Case7:", isMonotonic(array7));
// console.log("Test Case8:", isMonotonic(array8));
// console.log("Test Case9:", isMonotonic(array9));



















/** Spiral Traverse */
let array1 = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
];

let array2 = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
];

let array3 = [
  [19, 32, 33, 34, 25, 8],
  [16, 15, 14, 13, 12, 11],
  [18, 31, 36, 35, 26, 9],
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [17, 30, 29, 28, 27, 10]
];

var spiralTraverse = function (array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j])
      }
    } else {
      for (let j = array[i].length - 1; j >= 0; j--) {
        result.push(array[i][j])
      }
    }
  }
  return result;
};

console.log("Test Case1:", spiralTraverse(array1));
console.log("Test Case2:", spiralTraverse(array2));
console.log("Test Case3:", spiralTraverse(array3));