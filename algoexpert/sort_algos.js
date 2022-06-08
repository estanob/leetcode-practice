/** Insertion Sort */
function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    // console.log(`i is ${i}`);
    let currEle = arr[i]
    let j = i - 1;
    while (j >= 0 && arr[j] > currEle) { 
      arr[j + 1] = arr[j]      // making switches 
      j--;
    }
    arr[j + 1] = currEle      // make sure to also switch original index
    // console.log(`After sort #${i}`, arr);
  }
  return arr
}

// const array1 = [8, 5, 2, 9, 5, 6, 3]
// const array2 = [2, 1]
// const array3 = [1, 3, 2]
// const array4 = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]
// const array5 = [5, -2, 2, -8, 3, -10, -6, -1, 2, -2, 9, 1, 1]

// console.log("Test Case1:", insertionSort(array1));
// console.log("Test Case2:", insertionSort(array2));
// console.log("Test Case3:", insertionSort(array3));
// console.log("Test Case4:", insertionSort(array4));
// console.log("Test Case5:", insertionSort(array5));

























/** Three Number Sort */
const threeNumberSort = (array, order) => {
  let numCount = getNumCount(array)
  let numSortArr = [] //                  creating this new array uses more space
  for (let i = 0; i < order.length; i++) {
    let ele = order[i]
    for (let j = 0; j < numCount[ele]; j++) {
      numSortArr.push(ele)
    }
  }
  return numSortArr
}

const getNumCount = (array) => {
  let numCount = {}
  for (let i = 0; i < array.length; i++) {
    let num = array[i]
    if (!numCount[num]) {
      numCount[num] = 1
    } else {
      numCount[num]++
    }
  }
  return numCount
}

// const array1 = [1, 0, 0, -1, -1, 0, 1, 1], order1 = [0, 1, -1];
// const array2 = [7, 8, 9, 7, 8, 9, 9, 9, 9, 9, 9, 9], order2 = [8, 7, 9];
// const array3 = [], order3 = [0, 7, 9];
// const array4 = [-2, -3, -3, -3, -3, -3, -2, -2, -3], order4 = [-2, -3, 0];
// const array5 = [0, 10, 10, 10, 10, 10, 25, 25, 25, 25, 25], order5 = [25, 10, 0];

// console.log("Test Case1:", threeNumberSort(array1, order1));
// console.log("Test Case2:", threeNumberSort(array2, order2));
// console.log("Test Case3:", threeNumberSort(array3, order3));
// console.log("Test Case4:", threeNumberSort(array4, order4));
// console.log("Test Case5:", threeNumberSort(array5, order5));

















/** Merge Sort */
const mergeSort = array => {
  // Check if arr can be split
  //    if so, get middle index
  //    split arr into two sides
  //    use recursion to continue splitting

  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2)
  const leftSide = array.slice(0, middle)
  const rightSide = array.slice(middle)
  return merge(mergeSort(leftSide), mergeSort(rightSide))
}

const merge = (left, right) => {
  // Create new arr
  // check if either left or right arr is empty
  //      find lower value
  //          add left value
  //          add right value
  //      merge left arr
  //      merge right arr
  //  return result arr
  const newArr = []
  console.log("Left:", left, "Right:", right)
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      newArr.push(left.shift())
    } else {
      newArr.push(right.shift())
    }
  }
  console.log("New Arr:", newArr);
  return newArr.concat(left).concat(right)
}

/*
const mergeSort = array => {
  if (array.length <= 1) return array
  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)
  console.log("Arrays in main function: \n\left:", left, "\n\ right:", right);
  return mergeTopDown(mergeSort(left), mergeSort(right))
}

const mergeTopDown = (left, right) => {
  const array = []
  while (left.length && right.length) {
    console.log("Array in helper: ", array);
    if (left[0] < right[0]) {
      array.push(left.shift())
    } else {
      array.push(right.shift())
    }
  }
  return array.concat(left.slice()).concat(right.slice())
}
*/

const array1 = [8, 5, 2, 9, 5, 6, 3];
const array2 = [-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8];
const array3 = [8, -6, 7, 10, 8, -1, 6, 2, 4, -5, 1, 10, 8, -10, -9, -10, 8, 9, -2, 7, -2, 4];

console.log("Test Case1:", mergeSort(array1));
// console.log("Test Case2:", mergeSort(array2));
// console.log("Test Case3:", mergeSort(array3));















































/** Selection Sort */
const selectionSort = (array) => {
  let startIdx = 0
  while (startIdx < array.length - 1) { //  reduce the size of the area to be sorted as we continue to sort
    let smallestIdx = startIdx
    // console.log("Before sort", array);
    for (let i = startIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) smallestIdx = i
    }
    makeSwap(startIdx, smallestIdx, array)
    startIdx++
    // console.log("After the sort", array);
  }
  return array
}

const makeSwap = (i, j, array) => {
  let temp = array[j]
  array[j] = array[i]
  array[i] = temp
}

// const arr1 = [8, 5, 2, 9, 5, 6, 3];
// const arr2 = [1]
// const arr3 = [-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8]
// const arr4 = [384, -67, 120, 759, 697, 232, -7, -557, -772, -987, 687, 397, -763, -86, -491, 947, 921, 421, 825, -679, 946, -562, -626, -898, 204, 776, -343, 393, 51, -796, -425, 31, 165, 975, -720, 878, -785, -367, -609, 662, -79, -112, -313, -94, 187, 260, 43, 85, -746, 612, 67, -389, 508, 777, 624, 993, -581, 34, 444, -544, 243, -995, 432, -755, -978, 515, -68, -559, 489, 732, -19, -489, 737, 924]
// const arr5 = [-19, 759, 168, 306, 270, -602, 558, -821, -599, 328, 753, -50, -568, 268, -92, 381, -96, 730, 629, 678, -837, 351, 896, 63, -85, 437, -453, -991, 294, -384, -628, -529, 518, 613, -319, -519, -220, -67, 834, 619, 802, 207, 946, -904, 295, 718, -740, -557, -560, 80, 296, -90, 401, 407, 798, 254, 154, 387, 434, 491, 228, 307, 268, 505, -415, -976, 676, -917, 937, -609, 593, -36, 881, 607, 121, -373, 915, -885, 879, 391, -158, 588, -641, -937, 986, 949, -321]

// console.log("Test Case1:", selectionSort(arr1));
// console.log("Test Case2:", selectionSort(arr2));
// console.log("Test Case3:", selectionSort(arr3));
// console.log("Test Case4:", selectionSort(arr4));
// console.log("Test Case5:", selectionSort(arr5));