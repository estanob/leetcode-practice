/** Convert 1D Array Into 2D Array */
let original1 = [1,2,3,4], m1 = 2, n1 = 2; // [[1, 2], [3, 4]]
let original2 = [1,2,3], m2 = 1, n2 = 3; // [[1, 2, 3]]
let original3 = [1,2], m3 = 1, n3 = 1; // [[]]
let original4 = [3], m4 = 1, n4 = 2; // [[]]

var construct2DArray = function (original, m, n) {
  let result = new Array(m).fill(new Array(n));
  if (original.length < (m * n) || (m * n) < original.length) return [[]];
  for (a = 0; a < original.length; a++) {
    result[a % m][a % n] = original[a]
  }
  return result;
};

console.log("Test Case1:", construct2DArray(original1, m1, n1));
console.log("Test Case2:", construct2DArray(original2, m2, n2));
console.log("Test Case3:", construct2DArray(original3, m3, n3));
console.log("Test Case4:", construct2DArray(original4, m4, n4));