/** Goat Latin */
// let sentence1 = "I speak Goat Latin";
// let sentence2 = "The quick brown fox jumped over the lazy dog";

let vowels = ["a", "e", "i", "o", 'u', 'A', 'E', 'I', 'O', 'U'];
var toGoatLatin = function(sentence) {
  let words = sentence.split(" ")
  let goatSent = []
  for (let i = 0; i < words.length; i++) {
    let wordPrototype = wordTranslate(words[i])
    for (let j = 0; j < i + 1; j++) {
      wordPrototype += 'a'    
    }
    goatSent.push(wordPrototype)
  }
  return goatSent.join(" ")
};

var wordTranslate = function(word) {
  let newWord = ""
  if (vowels.indexOf(word[0]) > -1) {
    return word += 'ma'
  } else {
    newWord = word.slice(1)
  }
  newWord += word[0]
  newWord += "ma"
  return newWord
}

// console.log("Test Case1: ", toGoatLatin(sentence1));
// console.log("Test Case2: ", toGoatLatin(sentence2));






/** Defanging an IP Address */
// let address1 = "1.1.1.1";
// let address2 = "255.100.50.0";

var defangIPaddr = function(address) {
  let addParts = address.split(".")
  return addParts.join("[.]")
};

// console.log("Test Case1:", defangIPaddr(address1));
// console.log("Test Case2:", defangIPaddr(address2));







/** Substrings of Size Three with Distinct Characters */
// let s1 = "xyzzaz";
// let s2 = "aababcabc";

var countGoodSubstrings = function(s) {
  let howManyGood = 0;
  for (let i = 0; i < s.length - 2; i++) {
    if (s[i] !== s[i + 1] && s[i + 1] !== s[i + 2] && s[i] !== s[i + 2]) howManyGood++
  }
  return howManyGood;
};

// console.log("Test Case1: ", countGoodSubstrings(s1));
// console.log("Test Case2: ", countGoodSubstrings(s2));









/** Length of Last Word */
let s1 = "Hello World";
let s2 = "   fly me   to   the moon  ";
let s3 = "luffy is still joyboy";

var lengthOfLastWord = function(s) {
  let words = s.split(" ")
  let realWords = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) realWords.push(words[i])
  }
  return realWords[realWords.length - 1].length
};

console.log("Test Case1: ", lengthOfLastWord(s1));
console.log("Test Case2: ", lengthOfLastWord(s2));
console.log("Test Case3: ", lengthOfLastWord(s3));