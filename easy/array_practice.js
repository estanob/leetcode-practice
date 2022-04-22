/** Contains Duplicate */

let nums1 = [1,2,3,1];
let nums2 = [1,2,3,4];
let nums3 = [1,1,1,3,3,4,3,2,4,2];

var containsDuplicate = function(nums) {
  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] === nums[j]) {
  //       return true
  //     }
  //   }
  // }
  // return false
  
  let numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!numsObj[num]) {
      numsObj[num] = true;
    } else if (numsObj[num]) {
      return true;
    }
  }
  return false;
};

// console.log("Test Case1: ", containsDuplicate(nums1));
// console.log("Test Case2: ", containsDuplicate(nums2));
// console.log("Test Case3: ", containsDuplicate(nums3));



/** Squares of a sorted Array */

// let nums1 = [-4,-1,0,3,10];
// let nums2 = [-7,-3,2,3,11];

var sortedSquares = function(nums) {
  let squares = nums.map(num => num * num)
  squares.sort((a, b) => a - b)
  return squares;
};

// console.log("First test case: ", sortedSquares(nums1), "Second test case: ", sortedSquares(nums2))




/** Count Negative Numbers in a Sorted Matrix */

// let grid1 = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
// let grid2 = [[3,2],[1,0]];
// let grid3 = [[1,-1],[-1,-1]];
// let grid4 = [[-1]];

var countNegatives = function(grid) {
  let howMany = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j< grid[0].length; j++) {
          if (grid[i][j] < 0) howMany++
      }
  }
  return howMany;
};

// console.log("Test Case: 1", countNegatives(grid1))
// console.log("Test Case: 2", countNegatives(grid2))
// console.log("Test Case: 3", countNegatives(grid3))
// console.log("Test Case: 4", countNegatives(grid4))






/** How Many Numbers Are Smaller Than the Current Number */

// let nums1 = [8,1,2,2,3];
// let nums2 = [6,5,4,8];
// let nums3 = [7,7,7,7];

var smallerNumbersThanCurrent = function(nums) {
  let smallerNums = [];
  for (let i = 0; i < nums.length; i++) {
      let howMany = 0;
      for (let j = 0; j < nums.length; j++) {
          if (i !== j) {
              if (nums[i] > nums[j]) howMany++
          }
      }
      smallerNums.push(howMany)
  }
  return smallerNums;
};

// console.log("Test case 1: ", smallerNumbersThanCurrent(nums1));
// console.log("Test case2 : ", smallerNumbersThanCurrent(nums2));
// console.log("Test case3 : ", smallerNumbersThanCurrent(nums3));






/** Find the Highest Altitude */
// let gain1 = [-5,1,5,0,-7];
// let gain2 = [-4,-3,-2,-1,4,3,2];

var largestAltitude = function(gain) {
  let altitudes = [0, gain[0]];
  for (let i = 1; i < gain.length; i++) {
      altitudes.push(altitudes[altitudes.length - 1] + gain[i])
  }
  let maxAlt = altitudes[0]
  for (let j = 1; j < altitudes.length; j++) {
      if (altitudes[j] > maxAlt) {
          maxAlt = altitudes[j]
      }
  }
  return maxAlt
};

// console.log("Test case1: ", largestAltitude(gain1));
// console.log("Test case2: ", largestAltitude(gain2));






/** Two Sum */
// let nums1 = [2,7,11,15];
// let target1 = 9;

// let nums2 = [3,2,4];
// let target2 = 6;

// let nums3 = [3,3];
// let target3 = 6;

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};

// console.log("Test case1: ", twoSum(nums1, target1));
// console.log("Test case2: ", twoSum(nums2, target2));
// console.log("Test case3: ", twoSum(nums3, target3));









/**Two Sum II - Input array is sorted */
// let numbers1 = [2,7,11,15];
// let target1 = 9;

// let numbers2 = [2,3,4];
// let target2 = 6;

// let numbers3 = [-1,0];
// let target3 = -1;

var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i < j && numbers[i] + numbers[j] === target) {
        return [(i + 1), (j + 1)];
      }
    }
  }
}

// console.log("Test Case1: ", twoSum(numbers1, target1));
// console.log("Test Case2: ", twoSum(numbers2, target2));
// console.log("Test Case3: ", twoSum(numbers3, target3));







// let nums1 = [1,2,3,1];
// let k1 = 3;

// let nums2 = [1,0,1,1];
// let k2 = 1;

// let nums3 = [1,2,3,1,2,3];
// let k3 = 2;

var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < j && nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
}

// console.log("Test Case1: ", containsNearbyDuplicate(nums1, k1))
// console.log("Test Case2: ", containsNearbyDuplicate(nums2, k2))
// console.log("Test Case3: ", containsNearbyDuplicate(nums3, k3))







/** Missing Number */

// let nums1 = [3,0,1];
// let nums2 = [0,1];
// let nums3 = [9,6,4,2,3,5,7,0,1];
// let nums4 = [0];

var missingNumber = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) return i;
  }
}

// console.log("Test Case1: ", missingNumber(nums1))
// console.log("Test Case2: ", missingNumber(nums2))
// console.log("Test Case3: ", missingNumber(nums3))
// console.log("Test Case4: ", missingNumber(nums4))






/** Move Zeroes */
// let nums1 = [0,1,0,3,12];
// let nums2 = [0];

var moveZeroes = function(nums) {
  let organized = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (num !== 0) organized.push(num)
  }
  for (let j = 0; j <= (nums.length - organized.length); j++) {
    organized.push(0)
  }
  return organized;
}

// console.log("Test Case1: ", moveZeroes(nums1));
// console.log("Test Case2: ", moveZeroes(nums2));







/** Find All Numbers Disappeared in an Array */

// let nums1 = [4,3,2,7,8,2,3,1];
// let nums2 = [1,1];

var findDisappearedNumbers = function(nums) {
  let missingNums = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i) && !missingNums.includes(i)) {
      missingNums.push(i)
    }
  }
  return missingNums;
}

// console.log("Test Case1: ", findDisappearedNumbers(nums1))
// console.log("Test Case2: ", findDisappearedNumbers(nums2))





































/*******
 * REVIEW
 * ******/




/** Assign Cookies */
// let g1 = [1,2,3];
// let s1 = [1,1];

// let g2 = [1,2];
// let s2 = [1,2,3];

var findContentChildren = function(g, s) {
  let happyNum = 0;
  for (let i = 0; i < Math.floor(g.length, s.length); i++) {
    if (g[i] === s[i]) happyNum++
  }
  return happyNum;
}

// console.log("Test Case1:", findContentChildren(g1, s1));
// console.log("Test Case2:", findContentChildren(g2, s2));








/** Keyboard Row */
// let words1 = ["Hello","Alaska","Dad","Peace"];
// let words2 = ["omk"];
// let words3 = ["adsdf","sfd"];

const firstRow =  ["q", "w", "e", "r", "t", "y", "u", "i", "o", 'p'];
const secondRow =  ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const thirdRow =  ["z", "x", "c", "v", "b", "n", "m"];

var findWords = function (words) {
  let canType = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase()
    if (canBeTyped(word, firstRow) || canBeTyped(word, secondRow) || canBeTyped(word, thirdRow)) {
      canType.push(words[i])
    }
  }
  return canType;
}

var canBeTyped = function (word, row) {
  for (let i = 0; i < word.length; i++) {
    if (!row.includes(word[i])) return false;
  }
  return true;
}

// console.log("Test Case1:", findWords(words1));
// console.log("Test Case2:", findWords(words2));
// console.log("Test Case3:", findWords(words3));








// let nums1 = [7,1,5,4];
// let nums2 = [9,4,3,2];
// let nums3 = [1,5,2,10];

var maximumDifference = function (nums) {
  let maxDiff = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < j && nums[i] < nums[j] && nums[j] - nums[i] > maxDiff) {
        maxDiff = nums[j] - nums[i]
      }
    }
  }
  return maxDiff === 0 ? -1 : maxDiff;
}

// console.log("Test Case1:", maximumDifference(nums1));
// console.log("Test Case2:", maximumDifference(nums2));
// console.log("Test Case3:", maximumDifference(nums3));







/** Lemonade Change */
// let bills1 = [5,5,5,10,20];
// let bills2 = [5,5,10,10,20];
// let bills3 = [5,5,10];
// let bills4 = [10,10];

var lemonadeChange = function (bills) {
  let availableChange = {
    5: 0,
    10: 0,
    20: 0,
  }

  for (let i = 0; i < bills.length; i++) {
    let bill = bills[i];
    if (bill === 5) {
      availableChange[5] += 1;
    } else if (bill === 10) {
      availableChange[10] += 1
      if (availableChange[5] >= 1) {
        availableChange[5] -= 1
      } else {
        return false
      }
    } else if (bill === 20) {
      availableChange[20] += 1
      if (availableChange[5] >= 1 && availableChange[10] >= 1) {
        availableChange[5] -= 1
        availableChange[10] -= 1
      } else if (availableChange[10] < 1 && availableChange[5] >= 3) {
        availableChange[5] -= 3
      } else {
        return false
      }
    }
  }
  return true;
}

// console.log("Test Case1:", lemonadeChange(bills1));
// console.log("Test Case2:", lemonadeChange(bills2));
// console.log("Test Case3:", lemonadeChange(bills3));
// console.log("Test Case4:", lemonadeChange(bills4));





/** Kids With the Greatest Number of Candies */
// let candies1 = [2,3,5,1,3];
// let extraCandies1 = 3;

// let candies2 = [4,2,1,1,2];
// let extraCandies2 = 1;

// let candies3 = [12,1,12];
// let extraCandies3 = 10;

var kidsWithCandies = function (candies, extraCandies) {
  let extras = [];
  const maxNum = findMax(candies);
  for (let i = 0; i < candies.length; i++) {
    let num = candies[i];
    if (num + extraCandies >= maxNum) {
      extras.push(true)
    } else {
      extras.push(false)
    }
  }
  return extras;
}

var findMax = function (array) {
  let biggest = array[0];
  for (let i = 1; i < array.length; i++) {
    let num = array[i];
    if (num > biggest) {
      biggest = num
    }
  }
  return biggest;
}

// console.log("Test Case1:", kidsWithCandies(candies1, extraCandies1))
// console.log("Test Case2:", kidsWithCandies(candies2, extraCandies2))
// console.log("Test Case3:", kidsWithCandies(candies3, extraCandies3))






/** Maximum Number of Balloons */
// let text1 = "nlaebolko";
// let text2 = "loonbalxballpoon";
// let text3 = "leetcode";
// let text4 = "balon";

var maxNumberOfBalloons = function (text) {
  let balloonCount = {};

  for (let char of text) {
    balloonCount[char] = (balloonCount[char] || 0) + 1
  }

  let howMany = 0;
  while (balloonCount['a'] > 0 && balloonCount['b'] > 0 && balloonCount['l'] > 1 && balloonCount['n'] > 0 && balloonCount['o'] > 1) {
    balloonCount['a']--;
    balloonCount['b']--;
    balloonCount['l'] -= 2;
    balloonCount['n']--;
    balloonCount['o'] -= 2;
    
    howMany++;
  }
  return howMany;
}

// console.log("Test Case1:", maxNumberOfBalloons(text1));
// console.log("Test Case2:", maxNumberOfBalloons(text2));
// console.log("Test Case3:", maxNumberOfBalloons(text3));
// console.log("Test Case4:", maxNumberOfBalloons(text4));







/** Concatenation of Array */
// let nums1 = [1,2,1];
// let nums2 = [1,3,2,1];

var getConcatenation = function (nums) {
  let concatenated = [];
  for (let i = 0; i < nums.length * 2; i++) {
    concatenated.push(nums[(i + nums.length) % nums.length])
  }
  return concatenated;
}

// console.log("Test Case1:", getConcatenation(nums1));
// console.log("Test Case2:", getConcatenation(nums2));




/** Number of Good Pairs */
// let nums1 = [1,2,3,1,1,3];
// let nums2 = [1,1,1,1];
// let nums3 = [1,2,3];

var numIdenticalPairs = function (nums) {
  let numPairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < j && nums[i] === nums[j]) numPairs++
    }
  }
  return numPairs;
}

// console.log("Test Case1:", numIdenticalPairs(nums1));
// console.log("Test Case2:", numIdenticalPairs(nums2));
// console.log("Test Case3:", numIdenticalPairs(nums3));




/** Shuffle the Array */
// let nums1 = [2,5,1,3,4,7];
// let n1 = 3;

// let nums2 = [1,2,3,4,4,3,2,1];
// let n2 = 4;

// let nums3 = [1,1,2,2];
// let n3 = 2;

var shuffle = function (nums, n) {
  let shArr = [];
  while (shArr <= nums.length) {
    for (let i = 0; i < n; i++) {
      shArr.push(nums[i], nums[i + n])
    }
  }
  return shArr;
}

// console.log("Test Case1:", shuffle(nums1, n1));
// console.log("Test Case2:", shuffle(nums2, n2));
// console.log("Test Case3:", shuffle(nums3, n3));


/** Richest Customer Weatlh */
// let accounts1 = [[1,2,3],[3,2,1]];
// let accounts2 = [[1,5],[7,3],[3,5]];
// let accounts3 = [[2,8,7],[7,1,3],[1,9,5]]

var maximumWealth = function (accounts) {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let account = accounts[i];
    if (addUpWealth(account) > maxWealth) maxWealth = addUpWealth(account)
  }
  return maxWealth;
}

var addUpWealth = function (account) {
  let wealth = 0;
  for (let i = 0; i < account.length; i++) {
    wealth += account[i];
  }
  return wealth;
}

// console.log("Test Case1:", maximumWealth(accounts1));
// console.log("Test Case2:", maximumWealth(accounts2));
// console.log("Test Case3:", maximumWealth(accounts3));









/** Count Number of Pairs with Absolute Difference K */
// let nums1 = [1,2,2,1];
// let k1 = 1;

// let nums2 = [1,3];
// let k2 = 3;

// let nums3 = [3,2,1,5,4];
// let k3 = 2;

var countKDifference = function (nums, k) {
  let howMany = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < j && Math.abs(nums[i] - nums[j]) === k) howMany++
    }
  }
  return howMany;
}

// console.log("Test Case1:", countKDifference(nums1, k1));
// console.log("Test Case2:", countKDifference(nums2, k2));
// console.log("Test Case3:", countKDifference(nums3, k3));







/** Check if Two String Arrays are Equivalent */
// let word1 = ["ab", "c"];
// let word2 = ["a", "bc"];

// let word3 = ["a", "cb"];
// let word4 = ["ab", "c"];

// let word5  = ["abc", "d", "defg"];
// let word6 = ["abcddefg"];

var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("");
}

// console.log("Test Case1:", arrayStringsAreEqual(word1, word2));
// console.log("Test Case2:", arrayStringsAreEqual(word3, word4));
// console.log("Test Case3:", arrayStringsAreEqual(word5, word6));






/** Sort Array by Parity */
// let nums1 = [3,1,2,4];
// let nums2 = [0];

var sortArrayByParity = function (nums) {
  if (nums.length === 0) return nums;
  let sorted = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num % 2 === 0) {
      sorted.unshift(num)
    } else {
      sorted.push(num)
    }
  }
  return sorted;
}

// console.log("Test Case1:", sortArrayByParity(nums1));
// console.log("Test Case2:", sortArrayByParity(nums2));

/**
 * MOST IMPORTANT TO STUDY
 * 
 

 
 Sum of Unique Elements
 // let nums1 = [1,2,3,2];
 // let nums2 = [1,1,1,1,1];
 // let nums3 = [1,2,3,4,5];
 
 var sumOfUnique = function (nums) {
   let elements = {}
   let sum = 0;
   for (let i = 0; i < nums.length; i++) {
     let num = nums[i];
     if (elements[num]) {
       elements[num]++
     } else {
       elements[num] = 1
     }
   }
   for (let key in elements) {
     if (elements[key] === 1) sum += parseInt(key)
   }
   return sum;
 }
 
 // console.log("Test Case1:", sumOfUnique(nums1));
 // console.log("Test Case2:", sumOfUnique(nums2));
 // console.log("Test Case3:", sumOfUnique(nums3));








































 
 
 
 
 

 /** Find Peak Element */
// var findPeakElement = function (nums) {
//   /** O(N) solution: */
//   // if (nums[0] > nums[1] || nums.length === 1) return 0;
//   // if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;
//   // for (let i = 1; i < nums.length - 1; i++) {
//   //   let prevNum = nums[i - 1];
//   //   let nextNum = nums[i + 1];
//   //   let currNum = nums[i];
//   //   if (prevNum < currNum && currNum > nextNum) return i;
//   // }


//   /** O(log(N)) solution: */
//   let left = 0;
//   let right = nums.length - 1;      // start at the ends
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2); // cut the array in half
//     if (nums[mid] > nums[mid + 1]) {
//       right = mid; //
//     } else {
//       left = mid + 1;
//     };
//   };
//   return left;
// }

//  let nums1 = [1,2,3,1];
//  let nums2 = [1,2,1,3,5,6,4];
 
//  console.log("Test Case1:", findPeakElement(nums1));
//  console.log("Test Case2:", findPeakElement(nums2));
 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /** Destination City
 let paths1 = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]];
 let paths2 = [["B","C"],["D","B"],["C","A"]];
 let paths3 = [["A","Z"]];
 
 var destCity = function (paths) {
   // if (paths.length === 1) return paths[0][paths[0].length - 1]
   // let cities = {};
   // for (let i = 0; i < paths.length; i++) {
   //   let path = paths[i];
   //   for (let j = 0; j < path.length; j++) {
   //     cities[path[j]] += 1
   //   }
   // }
   // for (let city in cities) {
   //   if (cities[city] === 1) return city
   // }
 
   let start = [];
   let next = [];
   for (let i = 0; i < paths.length; i++) {
     let path = paths[i];
     start.push(path[0]);
     next.push(path[1]);
   }
 
   for (let i = 0; i < next.length; i++) {
     let city = next[i];
     if (!start.includes(city)) return city;
   }
 }
 
 console.log("Test Case1:", destCity(paths1));
 console.log("Test Case2:", destCity(paths2));
 console.log("Test Case3:", destCity(paths3));

 
 
 
 
 Count of Matches in Tournament
 let n1 = 7;
 let n2 = 14;
 
 var numberOfMatches = function (n) {
   let howManyMatches = 0;
   let numTeams = n;
   if (numTeams % 2 === 0) {
     while (numTeams > 1) {
       let numMatches = numTeams / 2; 
       howManyMatches += numMatches
       numTeams = numMatches
     }
   } else {
     while (numTeams > 1) {
       let numMatches = (numTeams - 1) / 2;
       howManyMatches += numMatches;
       numTeams = (numMatches + 1) - 1;
     }
   }
   return howManyMatches;
 }
 
 console.log("Test Case1:", numberOfMatches(n1));
 console.log("Test Case2:", numberOfMatches(n2));

 
 
 
 
 Split a String in Balanced Strings
 let s1 = "RLRRLLRLRL";
 let s2 = "RLLLLRRRLR";
 let s3 = "LLLLRRRR";
 let s4 = "RLRRRLLRLL";
 var balancedStringSplit = function (s) {
 
   // let balanceCount = 0;
   let rCount = 0, lCount = 0;
   for (let i = 0; i < s.length; i++) {
     if (s[i] === "R") {
       rCount++
     } else {
       rCount--
     }
     if (rCount === 0) {
       lCount++
     }
   }
   return lCount
   // return balanceCount;
 }
 
 // var determineBalance = function (s) {
 //   let rCount = 0;
 //   let lCount = 0;
 //   for (let i = 0; i < )
 // }
 
 console.log("Test Case1", balancedStringSplit(s1));
 console.log("Test Case2", balancedStringSplit(s2));
 console.log("Test Case3", balancedStringSplit(s3));
 console.log("Test Case4", balancedStringSplit(s4));
 
 
 
 
 
 
 Create Target Array in the Given Order
 let nums1 = [0,1,2,3,4];
 let index1 = [0,1,2,2,1];
 // [0,4,1,3,2];
 
 let nums2 = [1,2,3,4,0];
 let index2 = [0,1,2,3,0];
 // [0,1,2,3,4];
 
 let nums3 = [1];
 let index3 = [0];
 // [1];
 
 var createTargetArray = function (nums, index) {
   let targetArr = [];
   for (let i = 0; i < nums.length; i++) {
     targetArr.splice(index[i], 0, nums[i])
   }
   return targetArr;
 }
 
 console.log("Test Case1:", createTargetArray(nums1, index1));
 console.log("Test Case2:", createTargetArray(nums2, index2));
 console.log("Test Case3:", createTargetArray(nums3, index3));
 
 
 
 
 
 Find Greatest Common Divisor of Array
 let nums1 = [2,5,6,9,10];
 let nums2 = [7,5,6,8,3];
 let nums3 = [3,3];
 let nums4 = [1,1];
 let nums5 = [6,7,9];
 
 var findGCD = function (nums) {
   const minNum = findMin(nums);
   const maxNum = findMax(nums);
   if (minNum === maxNum) {
     return minNum;
   }
   for (let i = maxNum; i >= minNum; i--) {
     if (minNum % i === 0 && maxNum % i === 0) {
       return i;
     } else {
       return 1;
     }
   }
 }
 
 var findMin = function (nums) {
   let minNum = nums[0];
   for (let i = 1; i < nums.length; i++) {
     let num = nums[i];
     if (num < minNum) minNum = num;
   }
   return minNum;
 }
 
 var findMax = function (nums) {
   let maxNum = nums[0];
   for (let i = 1; i < nums.length; i++) {
     let num = nums[i];
     if (num > maxNum) maxNum = num;
   }
   return maxNum;
 }
 
 console.log("Test Case1:", findGCD(nums1));
 console.log("Test Case2:", findGCD(nums2));
 console.log("Test Case3:", findGCD(nums3));
 console.log("Test Case4:", findGCD(nums4));
 console.log("Test Case5:", findGCD(nums5));
 
 
 Sum of All Odd Length Subrrays 
 let arr1 = [1,4,2,5,3];
 let arr2 = [1,2];
 let arr3 = [10,11,12];
 
 var sumOddLengthSubarrays = function (arr) {
   let oddSum = 0;
 
   
 }
 
 console.log("Test Case1:", sumOddLengthSubarrays(arr1));
 console.log("Test Case2:", sumOddLengthSubarrays(arr2));
 console.log("Test Case3:", sumOddLengthSubarrays(arr3));


 
 
 
 
 Maximum Units on a Truck
 * let boxTypes1 = [[1,3],[2,2],[3,1]];
 * let truckSize1 = 4;
 * 
 * let boxTypes2 = [[5,10],[2,5],[4,7],[3,9]];
 * let truckSize2 = 10;
 * 
 * var maximumUnits = function (boxTypes, truckSize) {
 *   boxTypes = boxTypes.sort((a, b) => b[1] - a[1]);
 * 
 *   let boxLimit = truckSize;
 *   let maxUnits = 0;
 *   for (let i = 0; i < boxTypes.length; i++) {
 *     let box = boxTypes[i];
 *     if (boxLimit > 0) {
 *       if (box[0] <= boxLimit) {
 *         maxUnits += (box[0] * box[1]);
 *         boxLimit -= box[0];
 *       } else if (box[0] > boxLimit) {
 *         maxUnits += (boxLimit * box[1])
 *         boxLimit = 0
 *       }
 *     }
 *   }
 *   return maxUnits;
 * }
 
 console.log("Test Case1:", maximumUnits(boxTypes1, truckSize1));
 console.log("Test Case2:", maximumUnits(boxTypes2, truckSize2));
 
 
 * 
 * Island Perimeter
  
 * 
 * 
 * You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
 * 
 * 
 */


















/** Peak Index in a Mountain Array */
var peakIndexInMountainArray = function (arr) {
  let i = 1;
  while (i < arr.length) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) return i
    i++
  }
};

// let arr1 = [0,1,0];
// let arr2 = [0,2,1,0];
// let arr3 = [0,10,5,2];
// let arr4 = [0,3,7,10,5,2];

// console.log("Test Case1:", peakIndexInMountainArray(arr1));
// console.log("Test Case2:", peakIndexInMountainArray(arr2));
// console.log("Test Case3:", peakIndexInMountainArray(arr3));
// console.log("Test Case4:", peakIndexInMountainArray(arr4));

















/** Convert 1D Array to 2D Array */
var construct2DArray = function (original, m, n) {
  let result = new Array(m).fill([]);
  if (original.length > (m * n)) return [];
  for (let j = 0; j < original.length; j++) {
    let ele = original[j];
    result[(j % m)][(j % n)] = ele;
  };
  return result;
};

// let original1 = [1,2,3,4], m1 = 2, n1 = 2;
// let original2 = [1,2,3], m2 = 1, n2 = 3;
// let original3 = [1,2], m3 = 1, n3 = 1;

// console.log("Test Case1:", construct2DArray(original1, m1, n1));
// console.log("Test Case2:", construct2DArray(original2, m2, n2));
// console.log("Test Case3:", construct2DArray(original3, m3, n3));

















/**
 * Best Time to Buy and Sell Stock
 */
 let prices1 = [7,1,5,3,6,4];
 let prices2 = [7,6,4,3,1];
 
 var maxProfit = function (prices) {
   /**
    let bestBuy = 0;
    let cheapestStock = prices[0];
    for (let i = 1; i < prices.length; i++) {
      let stock = prices[i]
      if (cheapestStock > stock) cheapestStock = stock
      if (stock - cheapestStock > bestBuy) bestBuy = stock - cheapestStock
    }
    return bestBuy;
    */

    let highestProfit = 0;
    let lowestStock = prices[0];
    for (let i in prices) {
      let price = prices[i];
      lowestStock = Math.min(lowestStock, price);
      highestProfit = Math.max((price - lowestStock), highestProfit);
    };
    return highestProfit;
 };
 
 console.log("Test Case1:", maxProfit(prices1));
 console.log("Test Case2:", maxProfit(prices2));