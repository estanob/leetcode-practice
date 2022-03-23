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














/** Jewels and Stones */
// let jewels1 = "aA";
// let stones1 = "aAAbbbb";

// let jewels2 = "z";
// let stones2 = "ZZ";

var numJewelsInStones = function (jewels, stones) {
  let numJewels = 0;
  let jewelTypes = jewels.split("");
  for (let i = 0; i < stones.length; i++) {
    if (jewelTypes.includes(stones[i])) numJewels++
  }
  return numJewels;
}

// console.log("Test Case1:", numJewelsInStones(jewels1, stones1));
// console.log("Test Case:2", numJewelsInStones(jewels2, stones2));












/** Shuffle String */

// let s1 = "codeleet";
// let indices1 = [4,5,6,7,0,2,1,3];

// let s2 = "abc";
// let indices2 = [0,1,2];

// let s3 = "aiohn";
// let indices3 = [3,1,4,2,0];

// let s4 = "aaiougrt";
// let indices4 = [4,0,2,6,7,3,1,5];

// let s5 = "art";
// let indices5 = [1,0,2];

var restoreString = function (s, indices) {
  let restoredStr = [];
  for (let i = 0; i < indices.length; i++) {
    restoredStr[indices[i]] = s[i];
  }
  return restoredStr.join("");
}

// console.log("Test Case1:", restoreString(s1, indices1));
// console.log("Test Case2:", restoreString(s2, indices2));
// console.log("Test Case3:", restoreString(s3, indices3));
// console.log("Test Case4:", restoreString(s4, indices4));
// console.log("Test Case:5", restoreString(s5, indices5));











/** Count the Number of Consistent Strings */

// let allowed1 = "ab";
// let words1 = ["ad","bd","aaab","baa","badab"];

// let allowed2 = "abc";
// let words2 = ["a","b","c","ab","ac","bc","abc"];

// let allowed3 = "cad";
// let words3 = ["cc","acd","b","ba","bac","bad","ac","d"];

var countConsistentStrings = function (allowed, words) {
  let numStr = 0;
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    if (strIsAllowed(allowed, word)) numStr++;
  }
  return numStr;
}

var strIsAllowed = function (allowed, word) {
  const allowedChars = allowed.split("")
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!allowedChars.includes(char)) return false;
  }
  return true;
}

// console.log("Test Case1:", countConsistentStrings(allowed1, words1));
// console.log("Test Case2:", countConsistentStrings(allowed2, words2));
// console.log("Test Case3:", countConsistentStrings(allowed3, words3));






const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// let s1 = "Hello";
// let s2 = "here";
// let s3 = "LOVELY";

var toLowerCase = function (s) {
  let resultStr = "";
  for (let v = 0; v < s.length; v++) {
    let char = s[v];
    if (upperCaseAlphabet.includes(char)) {
      resultStr += alphabet[upperCaseAlphabet.indexOf(char)];
    } else {
      resultStr += char;
    }
  }
  return resultStr;
}

// console.log("Test Case1:", toLowerCase (s1));
// console.log("Test Case2:", toLowerCase (s2));
// console.log("Test Case3:", toLowerCase (s3));





/** Unique Morse Code Words */
const morseLetters = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
// let words1 = ["gin","zen","gig","msg"];
// let words2 = ["a"];

var uniqueMorseRepresentations = function (words) {
  if (words.length === 1) return 1
  let reps = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (!reps.includes(convertToMorse(word))) reps.push(convertToMorse(word))
  }
  return reps.length;
}

var convertToMorse = function (word) {
  let morseWord = "";
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    morseWord += morseLetters[alphabet.indexOf(char)]
  }
  return morseWord;
}

// console.log("Test Case1:", uniqueMorseRepresentations(words1));
// console.log("Test Case2:", uniqueMorseRepresentations(words2));







/** Reverse Prefix of Word */
// let word1 = "abcdefd";
// let ch1 = "d";

// let word2 = "xyxzxe";
// let ch2 = "z";

// let word3 = "abcd";
// let ch3 = "z";

var reversePrefix = function (word, ch) {
  let chars = word.split("");
  if (!chars.includes(ch)) return word;
  let revPref = "";
  let keyIdx = chars.indexOf(ch);
  revPref += reversePhrase(word.slice(0, keyIdx + 1));
  revPref += word.slice(keyIdx + 1);
  return revPref;
}

var reversePhrase = function (phrase) {
  let revWord = "";
  for (let i = phrase.length - 1; i >= 0; i--) {
    revWord += phrase[i]
  }
  return revWord;
}

// console.log("Test Case1:", reversePrefix (word1, ch1));
// console.log("Test Case2:", reversePrefix (word2, ch2));
// console.log("Test Case:3", reversePrefix (word3, ch3));






// let words1 = ["bella","label","roller"];
// let words2 = ["cool","lock","cook"];

var commonChars = function (words) {
  let firstCharSet = words[0].split("");
  let secCharSet = words[1].split("");
  let commChars = [];
  for (let i = 0; i < words[words.length - 1].length; i++) {
    if (firstCharSet.includes(words[words.length - 1][i]) && secCharSet.includes(words[words.length - 1][i])) {
      commChars.push(words[words.length - 1][i]);
    }
  }
  return commChars;
}

// console.log("Test Case1:", commonChars(words1));
// console.log("Test Case2:", commonChars(words2));



/** Robot Return to Origin */
// let moves1 = "UD";
// let moves2 = "LL";
// let moves3 = "RRDD";
// let moves4 = "LDRRLRUULR";

var judgeCircle = function (moves) {
  let positionX = 0;
  let positionY = 0;
  for (let i = 0; i < moves.length; i++) {
    let move = moves[i]
    if (move === "U") {
      positionY++
    } else if (move === "D") {
      positionY--
    } else if (move === "L") {
      positionX--
    } else if (move === "R") {
      positionX++
    }
  }
  // if (positionX === 0 && positionY === 0) {
  //   return true
  // } else {
  //   return false;
  // }
  return positionX === 0 && positionY === 0
}

// console.log("Test Case1:", judgeCircle(moves1))
// console.log("Test Case2:", judgeCircle(moves2))
// console.log("Test Case3:", judgeCircle(moves3))
// console.log("Test Case4:", judgeCircle(moves4))




/** Reverse Words in a String III */
// let s1 = "Let's take LeetCode contest";
// let s2 = "God Ding";

var reverseWords = function (s) {
  let revWords = [];
  let words = s.split(" ")
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    revWords.push(reverseWord(word))
  }
  return revWords.join(" ")
}

var reverseWord = function (word) {
  let newWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    let char = word[i];
    newWord += char;
  }
  return newWord;
}

// console.log("Test Case:1", reverseWords(s1));
// console.log("Test Case2:", reverseWords(s2));


















/** Sorting the Sentence */
/*************
 * NEED TO REVIEW
 * ******************/



/** String Matching in an Array */
// let words1 = ["mass","as","hero","superhero"];
// let words2 = ["leetcode","et","code"];
// let words3 = ["blue","green","bu"];

var stringMatching = function (words) {
  // let isSubstr = [];
  // for (let i = 0; i < words.length; i++) {
  //   for (let j = 0; j < words.length; j++) {
  //     if (i < j && isSubstring(words[i], words[j])) {
  //       if (words[i].length < words[j].length) {
  //         isSubstr.push(words[i])
  //       } else {
  //         isSubstr.push(words[j])
  //       }
  //     }
  //   }
  // }
  // return isSubstr;

  return words.filter((word, i) => {
    for (let j = 0; j < words.length; j++) {
      if (i === j) {
        continue;
      }
      if (words[j].includes(word)) {
        return true;
      }
    }
    return false;
  })
}

// var isSubstring = function (word1, word2) {
//   if (word1.length > word2.length) {
//     for (let i = 0; i < (word1.length - word2.length); i++) {
//       if (word1.substring(i, word2.length) === word2) {
//         return true;
//       }
//     }
//   } else {
//     for (let i = 0; i < (word2.length - word1.length); i++) {
//       if (word2.substring(i, word1.length) === word1) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log("Test Case1:", stringMatching(words1));
// console.log("Test Case2:", stringMatching(words2));
// console.log("Test Case3:", stringMatching(words3));







/** Check if a Word Occurs as a Prefix of Any Word */
// let sentence1 = "i love eating burger", searchWord1 = "burg";
// let sentence2 = "this problem is an easy problem", searchWord2 = "pro";
// let sentence3 = "i am tired", searchWord3 = "you";
// let sentence4 = "i use triple pillow", searchWord4 = "pill";
// let sentence5 = "hello from the other side", searchWord5 = "they";

var isPrefixOfWord = function (sentence, searchWord) {
  let words = sentence.split(" ");
  // let isFound = true;
  // for (let i = 0; i < words.length; i++) {
  //   let word = words[i]
  //   for (let j = 0; j < word.length; j++) {
  //     if (searchWord[j] !== word[j]) isFound = false;
  //   }
  // }
  for (let i = 0; i < words.length; i++) {
    if (words[i].substring(0, searchWord.length) === searchWord) return i + 1
  }
  return -1;
}

// console.log("Test Case1:", isPrefixOfWord(sentence1, searchWord1));
// console.log("Test Case2:", isPrefixOfWord(sentence2, searchWord2));
// console.log("Test Case3:", isPrefixOfWord(sentence3, searchWord3));
// console.log("Test Case4:", isPrefixOfWord(sentence4, searchWord4));
// console.log("Test Case5:", isPrefixOfWord(sentence5, searchWord5));





/** Merge Strings Alternately */
// let word1 = "abc"; 
// let word2 = "pqr";

// let word3 = "ab"; 
// let word4 = "pqrs";

// let word5 = "abcd"; 
// let word6 = "pq";

var mergeAlternately = function (word1, word2) {
  let mergedStr = "";
  // let str1 = word1;
  // let str2 = word2;
  // for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
  //   if (str1[i] || str2) {
  //     mergedStr += str1[i]
  //     mergedStr += str2[i]
  //   } else {
  //     mergedStr += ""
  //   }
  // }
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    mergedStr += word1[i] || '';
    mergedStr += word2[i] || '';
  }
  return mergedStr;
}

// console.log("Test Case1", mergeAlternately(word1, word2));
// console.log("Test Case2", mergeAlternately(word3, word4));
// console.log("Test Case3", mergeAlternately(word5, word6));








/** Check if the Sentence is Paragram */
// let sentence1 = "thequickbrownfoxjumpsoverthelazydog";
// let sentence2 = "leetcode";

var checkIfPangram = function (sentence) {
  // if (sentence.length < 26) return false;
  // let sentChars = sentence.split("")
  // for (let i = 0; i < alphabet.length; i++) {
  //   if (!alphabet.includes([i])) return false
  // }
  // return true;

  const set = new Set(sentence)
  return set.size === 26;
}

// console.log("Test Case1:", checkIfPangram (sentence1));
// console.log("Test Case2:", checkIfPangram (sentence2));
// console.log("Test Case3:", checkIfPangram ("jwtucoucmdfwxxqnxzkaxoglszmfrcvjoiunqqausaxxaaijyqdqgvdnqcaihwilqkpivenpnekioyqujrdrovqrlxovcucjqzjsxmllfgndfprctxvxwlzjtciqxgsxfwhmuzqvlksyuztoetyjugmswfjtawwaqmwyxmvo"));







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

















/** Backspace String Compare */
var backspaceCompare = function (s, t) {
  let sBack = backSpaceHelper(s);
  let tBack = backSpaceHelper(t);
  console.log("The strings:", "S:", sBack, "T:", tBack)
  return sBack === tBack;
};

var backSpaceHelper = function (string) {
  /** this was my first attempt: */
  // let result = "";
  // for (let i = 0; i < string.length - 1; i++) {
  //   let currChar = string[i];
  //   let nextChar = string[i + 1];
  //   if (currChar !== "#" && nextChar !== "#") result += currChar;
  // }
  // let lastChar = string[string.length - 1];
  // if (lastChar !== "#") result += lastChar;
  // return result;

  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "#") {
      result.pop();
    } else {
      result.push(string[i]);
    };
  };
  return result.join("");
};

// let s1 = "ab#c", t1 = "ad#c";
// let s2 = "ab##", t2 = "c#d#";
// let s3 = "a#c", t3 = "b";

// console.log("Test Case1:", backspaceCompare(s1, t1));
// console.log("Test Case2:", backspaceCompare(s2, t2));
// console.log("Test Case3:", backspaceCompare(s3, t3));