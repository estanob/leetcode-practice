/** Find Smallest Letter Greater than Target */
const alphabet = ["a", "b", "c", "d", "e", 'f', "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const findGreatestLetter = function (letters, target) {
  // if (letters === ["a", "b"] && target === "z") return "a";
  // const halfPoint = Math.floor(letters.length / 2);
  // let rightHalf = letters.slice(halfPoint);
  // let leftHalf = letters.slice(0, halfPoint);
  // if ()
  // if (letters[halfPoint] < target) {
  //   return findGreatestLetter(rightHalf, target);
  // } else {
  //   return findGreatestLetter(leftHalf, target);
  // }
  // if (target === "z" || target === letters[letters.length - 1] || target > letters[letters.length - 1]) return letters[0];
  for (let letter of letters) {
    if (letter > target) return letter;
  };
  return letters[0];
}

// let letters1 = ["c","f","j"], target1 = "a";
// let letters2 = ["c","f","j"], target2 = "c";
// let letters3 = ["c","f","j"], target3 = "d";
// let letters4 = ["a", "b"], target4 = "z";

// console.log("Test Case1:", findGreatestLetter(letters1, target1));
// console.log("Test Case2:", findGreatestLetter(letters2, target2));
// console.log("Test Case3:", findGreatestLetter(letters3, target3));
// console.log("Test Case4:", findGreatestLetter(letters4, target4));