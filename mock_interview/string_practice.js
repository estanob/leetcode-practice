/*
validWordSquare(words)
[ “abcd”, 
  “bnrt”, 
  “crmy”, 
  “dtye” ] // => true “abcd”, “nrt”, “my” 
[ “abcd”, “bnrt”, “crm”, “dt” ] // => true
[ “ball”, “area”, “read”, “lady” ] // => false
["ball",
 "asee",
 "let ",
 "lep "] // => false

if k row & k column read the same for every value of k
0 < k < max rows & columns
row = each element
column = each individual letter
words[0][0]
solve iteratively 
*/

let words1 = ["abcd", "bnrt", "crmy", "dtye"];
let words2 = ["abcd", "bnrt", "crm", "dt"];
let words3 = ["ball", "area", "read", "lady"]; // false
let words4 = ["ball", "asee", "let", "lep"];

var validWordSquare = function (words) { // words = [ “ball”, “area”, “read”, “lady” ]
	/* for (let i = 1; i < words.length; i++) {			// i = 2
	const refWord = words[0]; // “ball”
	let currentWord = words[i]; // => “read”
	if (refWord[i] !== currentWord[0]) return false;
	if (currentWord.length 
}
	return true; */
	

	for (let i = 0; i < words.length; i++) {
    let refWord = words[i];
    let refString = getRefString(refWord, i);
    console.log("Reference word:", refWord.slice(i + 1), "Reference String:", refString)
		if (refWord.slice(i + 1) !== refString) return false
  }
  return true;
};

var getRefString = function (refWord, idx) {
	let result = "";
	for (let i = idx; i < refWord.length; i++) {
		result += refWord[i];
  }
  console.log("Result String:", result)
	return result;
}

console.log("Test Case1:", validWordSquare(words1));
console.log("Test Case2:", validWordSquare(words2));
console.log("Test Case3:", validWordSquare(words3));
console.log("Test Case4:", validWordSquare(words4));