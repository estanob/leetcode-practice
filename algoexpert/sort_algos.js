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
  let numSortArr = []
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

const array1 = [1, 0, 0, -1, -1, 0, 1, 1], order1 = [0, 1, -1];
const array2 = [7, 8, 9, 7, 8, 9, 9, 9, 9, 9, 9, 9], order2 = [8, 7, 9];
const array3 = [], order3 = [0, 7, 9];
const array4 = [-2, -3, -3, -3, -3, -3, -2, -2, -3], order4 = [-2, -3, 0];
const array5 = [0, 10, 10, 10, 10, 10, 25, 25, 25, 25, 25], order5 = [25, 10, 0];

console.log("Test Case1:", threeNumberSort(array1, order1));
console.log("Test Case2:", threeNumberSort(array2, order2));
console.log("Test Case3:", threeNumberSort(array3, order3));
console.log("Test Case4:", threeNumberSort(array4, order4));
console.log("Test Case5:", threeNumberSort(array5, order5));