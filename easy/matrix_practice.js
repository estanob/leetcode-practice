/** Convert 1D Array Into 2D Array */
// let original1 = [1,2,3,4], m1 = 2, n1 = 2; // [[1, 2], [3, 4]]
// let original2 = [1,2,3], m2 = 1, n2 = 3; // [[1, 2, 3]]
// let original3 = [1,2], m3 = 1, n3 = 1; // [[]]
// let original4 = [3], m4 = 1, n4 = 2; // [[]]

var construct2DArray = function (original, m, n) {
  let result = new Array(m).fill(new Array(n));
  if (original.length < (m * n) || (m * n) < original.length) return [[]];
  for (a = 0; a < original.length; a++) {
    result[a % m][a % n] = original[a]
  }
  return result;
};

// console.log("Test Case1:", construct2DArray(original1, m1, n1));
// console.log("Test Case2:", construct2DArray(original2, m2, n2));
// console.log("Test Case3:", construct2DArray(original3, m3, n3));
// console.log("Test Case4:", construct2DArray(original4, m4, n4));




























































/** STUDY  */



















/** Flood Fill */
function floodFill(image, sr, sc, newColor, oldColor = image[sr][sc]) { 
  if (
    sr < 0 || sr >= image.length ||
    sc < 0 || sc >= image[sr].length ||
    image[sr][sc] !== oldColor ||
    image[sr][sc] === newColor
  ) {
    return image
  }

  image[sr][sc] = newColor

  floodFill(image, sr + 1, sc, newColor, oldColor)
  floodFill(image, sr - 1, sc, newColor, oldColor)
  floodFill(image, sr, sc + 1, newColor, oldColor)
  floodFill(image, sr, sc - 1, newColor, oldColor)

  return image
}

let image1 = [[1,1,1],[1,1,0],[1,0,1]], sr1 = 1, sc1 = 1, newColor1 = 2
let image2 = [[0,0,0],[0,0,0]], sr2 = 0, sc2 = 0, newColor2 = 2

console.log("Test Case1:", floodFill(image1, sr1, sc1, newColor1, oldColor = image1[sr1][sc1]));
console.log("Test Case2:", floodFill(image2, sr2, sc2, newColor2, oldColor = image2[sr2][sc2]));