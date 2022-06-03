/** Number of Students Unable to Eat Lunch */
function countStudents (students, sandwiches) {
  while (students.length > 0) {
    if (students[0] === sandwiches[0]) {
      students.shift()
      sandwiches.shift()
    } else {
      if (noStudentWants(students, sandwiches[0])) {
        return students.length
      } else {
        let movingStudent = students.shift()
        students.push(movingStudent)
      }
    }
  }
  return 0;
}

function noStudentWants (students, topSandwich) {
  for (let i = 0; i < students.length; i++) {
    if (students[i] === topSandwich) {
      return false
    }
  }
  return true
}

let students1 = [1,1,0,0], sandwiches1 = [0,1,0,1]
let students2 = [1,1,1,0,0,1], sandwiches2 = [1,0,0,0,1,1]

console.log("Test Case1", countStudents(students1, sandwiches1));
console.log("Test Case2", countStudents(students2, sandwiches2));

/**
 * 
 * [1, 1, 1, 0, 0, 1]
 * [1, 0, 0, 0, 1, 1]
 * 
 * 
 * [1, 1, 0, 0, 1]
 * [0, 0, 0, 1, 1]
 * 
 * 
 * [1, 0, 0, 1, 1]
 * [0, 0, 0, 1, 1]
 * 
 * 
 * [0, 0, 1, 1, 1]
 * [0, 0, 0, 1, 1]
 * 
 * 
 * [0, 1, 1, 1]
 * [0, 0, 1, 1]
 * 
 * [1, 1, 1]
 * [0, 1, 1]
 * 
 * return 3
 */





















/** Valid Parentheses */
function isValid(s) {
  let sArr = s.split("")
  while (sArr.length) {
    let currentChar = sArr.pop()
    
  }
}

let s1 = "()"
let s2 = "()[]{}"
let s3 = "(]"




















/** Remove All Adjacent Duplicates in a String */
var removeDuplicates = function (s) {
  let noDupArr = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === noDupArr[noDupArr.length - 1]) {
      noDupArr.pop();     // remove chars as we go
    } else {
      noDupArr.push(char);  // if the char is not equal to noDupArr's last char, we will push it into the array
    };
  };
  return noDupArr.join("");
  
  
  
  
  
  
  // let noDupStr = s;
  // let allDupsOut = false;
  // let idx = 0;
  // while (!allDupsOut) {
  //   // console.log("No Dup Str", noDupStr);
  //   if (noDupStr.length === 2 && noDupStr[0] === noDupStr[1]) return '';
  //   if (noDupStr[idx] === noDupStr[idx + 1]) {
  //     noDupStr = noDupStr.slice(0, idx) + noDupStr.slice(idx + 2)
  //     idx = 0;
  //   } else {
  //     idx++
  //   };
  //   if (idx === noDupStr.length - 1) allDupsOut = true;
  // };
  // return noDupStr
}

// let s1 = "abbaca";
// let s2 = "azxxzy";

// console.log("Test Case1:", removeDuplicates(s1));
// console.log("Test Case2:", removeDuplicates(s2));



























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

// let ops1 = ["5","2","C","D","+"];
// let ops2 = ["5","-2","4","C","D","9","+","+"];

// console.log("Test Case1:", calPoints(ops1));
// console.log("Test Case2:", calPoints(ops2));






