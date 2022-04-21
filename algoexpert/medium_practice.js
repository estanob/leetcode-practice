/** Minimum Characters for Words */
// let words1 = ["this", "that", "did", "deed", "them!", "a"];
// let words2 = ["a", "abc", "ab", "boo"];
// let words3 = ["a"];
// let words4 = ["abc", "ab", "b", "bac", "c"];
// let words5 = ["!!!2", "234", "222", "432"];

var minimumCharactersForWords = function (words) {
  let minChars = {};
  let charsResult = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let charsCount = getCharCount(word);
    for (let char in charsCount) {
      if (!minChars[char]) {
        minChars[char] = charsCount[char]
      } else {
        minChars[char] = Math.max(minChars[char], charsCount[char])
      }
    }
  }
  for (let char in minChars) {
    for (let i = 0; i < minChars[char]; i++) {
      charsResult.push(char)
    };
  };
  return charsResult;
};

var getCharCount = function (string) {
  let charCount = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!charCount[char]) {
      charCount[char] = 1
    } else {
      charCount[char] += 1
    };
  }
  return charCount;
};

// console.log("Test Case1:", minimumCharactersForWords(words1));
// console.log("Test Case2:", minimumCharactersForWords(words2));
// console.log("Test Case3:", minimumCharactersForWords(words3));
// console.log("Test Case4:", minimumCharactersForWords(words4));
// console.log("Test Case5:", minimumCharactersForWords(words5));














/** Array of Products */
// let array1 = [5, 1, 4, 2];
// let array2 = [1, 8, 6, 2, 4];
// let array3 = [-5, 2, -4, 14, -6];
// let array4 = [9, 3, 2, 1, 9, 5, 3, 2];

var arrayOfProducts = function (array) {
  
};

// console.log("Test Case1", arrayOfProducts(array1));
// console.log("Test Case2", arrayOfProducts(array2));
// console.log("Test Case3", arrayOfProducts(array3));
// console.log("Test Case4", arrayOfProducts(array4));












/** Monotonic Array */
var isMonotonic = function (array) {
  if (array.length <= 2) return true;
  // if (array[0] < array[1]) {
  //   for (let i = 1; i < array.length; i++) {
  //     if (array[i] > array[i + 1]) {
  //       return false;
  //     };
  //   };
  // } else if (array[0] > array[1]) {
  //   for (let i = 1; i < array.length; i++) {
  //     if (array[i] < array[i + 1]) {
  //       return false;
  //     };
  //   };
  // } else {
  //   for (let i = 1; i < array.length; i++) {
  //     while () {};
  //   }
  // };
  // return true;

  let isIncreasing = true;
  let isDecreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] < array[i]) isDecreasing = false;
    if (array[i - 1] > array[i]) isIncreasing = false;
  }
  return isIncreasing || isDecreasing;
};

// let array1 = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
// let array2 = [];
// let array3 = [1];
// let array4 = [1, 5, 10, 1100, 1101, 1102, 9001];
// let array5 = [1, 2, 0];
// let array6 = [-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11];
// let array7 = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11];

// console.log("Test Case1:", isMonotonic(array1));
// console.log("Test Case2:", isMonotonic(array2));
// console.log("Test Case3:", isMonotonic(array3));
// console.log("Test Case4:", isMonotonic(array4));
// console.log("Test Case5:", isMonotonic(array5));
// console.log("Test Case6:", isMonotonic(array6), "This is supposed to return true");
// console.log("Test Case7:", isMonotonic(array7), "This is supposed to return false");



















/** Longest Palindromic Substring */
var longestPalindromicSubstring = function (string) {
  let longest = '';
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      let substring = string.slice(i, j + 1);
      if (isPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      };
    };
  };
  return longest;
};

var isPalindrome = function (string) {
  return string === string.split("").reverse().join("");
};


// let string1 = "abaxyzzyxf";
// let string2 = "it's highnoon";
// let string3 = "abcdefgfedcbazzzzzzzzzzzzzzzzzzzz";
// let string4 = "zzzzzzz2345abbbba5432zzbbababa";

// console.log("Test Case1:", longestPalindromicSubstring(string1));
// console.log("Test Case2:", longestPalindromicSubstring(string2));
// console.log("Test Case3:", longestPalindromicSubstring(string3));
// console.log("Test Case4:", longestPalindromicSubstring(string4));
















/** Smallest Difference */
var smallestDifference = function (arrayOne, arrayTwo) {
  let sortedOne = arrayOne.sort((a, b) => b - a);
  let sortedTwo = arrayTwo.sort((a, b) => b - a);
};

// let arrayOne1 = [-1, 5, 10, 20, 28, 3], arrayTwo1 = [26, 134, 135, 15, 17];
// let arrayOne2 = [-1, 5, 10, 20, 3], arrayTwo2 = [26, 134, 135, 15, 17];
// let arrayOne3 = [10, 0, 20, 25], arrayTwo3 = [1005, 1006, 1014, 1032, 1031];






















/** Longest Peak */
var longestPeak = function (array) {
  if (array.length === 1) return 1;
  if (array.length === 3 && array[1] > array[0] && array[1] > array[2]) return 3;
  if (array.length === 0) return 0;
  // let maxEle = array[1];
  // let peakIdx;
  // for (let i = 1; i < array.length - 1; i++) {
  //   let currentEle = array[i];
  //   let previousEle = array[i - 1];
  //   let nextEle = array[i + 1];
  //   if (currentEle > previousEle && currentEle > nextEle && currentEle > maxEle) {
  //     maxEle = currentEle;
  //     peakIdx = i;
  //   }
  //   // console.log("Iteration#", i, "Max Element =", maxEle, "Peak Index =", peakIdx)
  // }
  // return peakIdx ? peakIdx : -1;
  let maxLength = 0;
  for (let i = 1; i < array.length - 1; i ++) {
    let currEle = array[i];
    let prevEle = array[i - 1];
    let nextEle = array[i + 1];
    if (isPeak(currEle, prevEle, nextEle) && peakLength(currEle, i, array) > maxLength) {
      maxLength = peakLength(currEle, i, array);
    };
  };
  return maxLength;
};

var isPeak = function (current, previous, next) {
  return current > previous && current > next;
};

var peakLength = function (current, idx, array) {
  // console.log("Index:", idx)
  let leftEnd = idx - 1;
  let rightEnd = idx + 1;
  let nextLeft = leftEnd - 1;
  let nextRight = rightEnd + 1;
  // console.log("Left End", leftEnd, "Right End", rightEnd, "Next Left:", nextLeft, "NextRight:", nextRight)
  while (array[nextLeft] < array[leftEnd]) {
    leftEnd--;
    nextLeft--;
  };
  while (array[nextRight] < array[rightEnd]) {
    rightEnd++;
    nextRight++;
  };
  return rightEnd - leftEnd + 1;
}

let array1 = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
let array2 = [];
let array3 = [1, 3, 2];
let array4 = [1, 2, 3, 4, 5, 1];
let array5 = [1, 2, 3, 4, 5, 6, 10, 100, 1000];
let array6 = [1, 2, 3, 2];

console.log("Test Case1:", longestPeak(array1));
console.log("Test Case2:", longestPeak(array2));
console.log("Test Case3:", longestPeak(array3));
console.log("Test Case4:", longestPeak(array4));
console.log("Test Case5:", longestPeak(array5));
console.log("Test Case6:", longestPeak(array6));