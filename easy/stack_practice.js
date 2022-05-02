/** Baseball Game */
var calPoints = function(ops) {
  let scoreCard = [];
  ops.forEach(op => {
    if (parseInt(op)) {
      scoreCard.push(parseInt(op))
    } else if (op === "C") {
      scoreCard.pop();
    } else if (op === "+") {
      scoreCard.push(scoreCard[scoreCard.length - 1] + scoreCard[scoreCard.length - 2]);
    } else if (op === "D") {
      scoreCard.push(scoreCard[scoreCard.length - 1] * 2);
    };
  });
  return scoreCard.reduce((a,v) => a + v, 0)
};

let ops1 = ["5","2","C","D","+"];
let ops2 = ["5","-2","4","C","D","9","+","+"];

console.log("Test Case1:", calPoints(ops1));
console.log("Test Case2:", calPoints(ops2));