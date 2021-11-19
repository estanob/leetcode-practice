/** Bubble Sort */
let array1 = [8, 5, 2, 9, 5, 6, 3];
let array2 = [-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8];
let array3 = [5, -2, 2, -8, 3, -10, -6, -1, 2, -2, 9, 1, 1];

var bubbleSort = function (array) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        sorted = false;
      };
    };
  };
  return array;
};

console.log("Test Case1:", bubbleSort(array1));
console.log("Test Case2:", bubbleSort(array2));
console.log("Test Case3:", bubbleSort(array3));