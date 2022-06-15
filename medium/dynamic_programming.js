var uniquePaths = function (m, n) {
  // console.log("M is:", m, "N is:", n);
  let bottomRow = new Array(n).fill(1);
  // console.log("Bottom Row at the start:", bottomRow);
  for (let i = 0; i < m - 1; i++) {
    let upperRow = new Array(n).fill(1);
    for (let j = n - 2; j >= 0; j--) {
      // console.log(`Upper Row when j = ${j}`, upperRow);
      upperRow[j] = upperRow[j + 1] + bottomRow[j];
      // console.log(`bottomRow[${j}]:`, bottomRow[j]);
      // console.log(`upperRow[${j}]:`, upperRow[j]);
    }
    bottomRow = upperRow;
    // console.log("Bottom Row", bottomRow);
  }
  return bottomRow[0];
};

console.log("Test Case1:", uniquePaths(3, 7));
console.log("Test Case2:", uniquePaths(3, 3));