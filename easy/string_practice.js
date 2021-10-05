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
// let s1 = "Hello World";
// let s2 = "   fly me   to   the moon  ";
// let s3 = "luffy is still joyboy";

var lengthOfLastWord = function(s) {
  let words = s.split(" ")
  let realWords = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) realWords.push(words[i])
  }
  return realWords[realWords.length - 1].length
};

// console.log("Test Case1: ", lengthOfLastWord(s1));
// console.log("Test Case2: ", lengthOfLastWord(s2));
// console.log("Test Case3: ", lengthOfLastWord(s3));






/** Truncate Sentence */
// let s1 = "Hello how are you Contestant"; 
// let k1 = 4;

// let s2 = "What is the solution to this problem";
// let k2 = 4;

// let s3 = "chopper is not a tanuki"; 
// let k3 = 5;

var truncateSentence = function(s, k) {
  let words = s.split(" ");
  return words.slice(0, k).join(" ");
}

// console.log("Test Case1: ", truncateSentence(s1, k1));
// console.log("Test Case2: ", truncateSentence(s2, k2));
// console.log("Test Case3: ", truncateSentence(s3, k3));









/** Valid Palindrome */
// let s1 = "A man, a plan, a canal: Panama";
// let s2 = "race a car";

const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
var isPalindrome = function(s) {
  let lowerCaseLetters = s.toLowerCase().split("");
  let allLetters = [];
  for (let i = 0; i < lowerCaseLetters.length; i++) {
    if (alphabet.includes(lowerCaseLetters[i])) {
      allLetters.push(lowerCaseLetters[i])
    }
  }
  return allLetters.join("") === allLetters.reverse().join("")
}

// console.log("Test Case1: ", isPalindrome(s1));
// console.log("Test Case2: ", isPalindrome(s2));












/** Fizz Buzz */
var fizzBuzz = function(n) {
  let fizzResult = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzResult.push('FizzBuzz')
    } else if (i % 3 === 0 && !(i % 5 === 0)) {
      fizzResult.push("Fizz")
    } else if (!(i % 3 === 0) && i % 5 === 0) {
      fizzResult.push("Buzz")
    } else if (!(i % 3 === 0) && !(i % 5 === 0)) {
      fizzResult.push(i.toString())
    }
  }
  return fizzResult;
}

// console.log("Test Case1: ", fizzBuzz(3));
// console.log("Test Case2: ", fizzBuzz(5));
// console.log("Test Case3: ", fizzBuzz(15));



























































/** Sorting the Sentence */
/*************
 * NEED TO REVIEW
 * ******************/

// let s1 = "is2 sentence4 This1 a3";
// let s2 = "Myself2 Me1 I4 and3";

var sortSentence = function(s) {
  let words = s.split(" ")
  let sortedSent = [];
  for (var i = 1; i <= words.length; i++) {
    for (var j = 1; j <= words.length; j++) {
      if (parseInt(words[i][words[i].length - 1]) === i) {
        sortedSent.push(words[i].slice(0, words[i].length))
      }
    }
  }
  return sortedSent.join(" ");
}

// console.log("Test Case1: ", sortSentence(s1));
// console.log("Test Case2: ", sortSentence(s2));