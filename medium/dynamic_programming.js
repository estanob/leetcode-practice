





var uniquePaths = function (m, n, memo = {}) {
  /*
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
  */

  const key = m + ',' + n;
  if (key in memo) return memo[key];
  console.log(`key = ${key}`);
  if (m === 1 || n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  console.log("Memo before reassignment:", memo);    
  memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo)
  console.log("Memo after reassignment:", memo);  
  return memo[key]
};

console.log("Test Case1:", uniquePaths(3, 5));
// console.log("Test Case2:", uniquePaths(3, 3));