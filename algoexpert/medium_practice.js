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












