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

// let mat1 = 
//   [
//     [1,1,0,0,0],
//     [1,1,1,1,0],
//     [1,0,0,0,0],
//     [1,1,0,0,0],
//     [1,1,1,1,1]
//   ], 
//   k1 = 3;


// let mat2 = 
//   [
//     [1,0,0,0],
//     [1,1,1,1],
//     [1,0,0,0],
//     [1,0,0,0]
//   ], 
//   k2 = 2;

//   console.log("Test Case1: ", kWeakestRows(mat1, k1));
//   console.log("Test Case2: ", kWeakestRows(mat2, k2));


































/** Last Stone Weight */
function lastStoneWeight(stones) {
  while (stones.length > 1) {
  // while (stones.length !== 0 && stones.length !== 1) {
    console.log("Before sort", stones);
    stones = stones.sort((a, b) => a - b);
    console.log("After sort", stones);
    let lastStone = stones[stones.length - 1];
    let secondToLastStone = stones[stones.length - 2];
    console.log("Did the sort stick?", stones);
    if (lastStone === secondToLastStone) {
      stones.pop()
      stones.pop()
      console.log("after popping", stones);
    } else {
      stones.unshift(Math.abs(lastStone - secondToLastStone))
      stones.pop()
      stones.pop()
      console.log("What is stones here?", stones);
      stones = stones.sort((a, b) => a - b);
      console.log("after popping", stones);
    }
  }
  console.log("Out of while", stones);
  if (stones.length === 1) {
    return stones.pop()
  } else {
    return 0
  }
}

let stones1 = [2,7,4,1,8,1]
let stones2 = [1]

console.log("Last Stone Weight Test Case1: ", lastStoneWeight(stones1));
console.log("Last Stone Weight Test Case2: ", lastStoneWeight(stones2));
console.log("Last Stone Weight Test Case3: ", lastStoneWeight([3,7,2]));
