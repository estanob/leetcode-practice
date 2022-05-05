/** The K Weakest Rows in a Matrix */
var kWeakestRows = function (mat, k) {
  let rowStrengths = getRowStrengths(mat);
  let weakIndexes = [];
  for (let i = 0; i < k; i++) {
    let rowObject = rowStrengths[i]
    weakIndexes.push(rowObject.idx)
  }
  return weakIndexes;
}

var getRowStrengths = function (mat) {
  let strengths = []
  mat.forEach((row, i) => {
    strengths.push({idx: i, strength: getStrength(row)})
  })
  return strengths.sort((a, b) => a.strength - b.strength)
}

var getStrength = function (row) {
  let strength = 0;
  for (let i = 0; i < row.length; i++) {
    let num = row[i]
    if (num === 1) strength++
  }
  return strength
}

let mat1 = 
  [
    [1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]
  ], 
  k1 = 3;


let mat2 = 
  [
    [1,0,0,0],
    [1,1,1,1],
    [1,0,0,0],
    [1,0,0,0]
  ], 
  k2 = 2;

  console.log("Test Case1: ", kWeakestRows(mat1, k1));
  console.log("Test Case2: ", kWeakestRows(mat2, k2));