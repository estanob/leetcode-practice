/** Paired Parentheses */
const pairedParentheses = (str) => {
  // todo
  /*
  if (str.length === 0) return true
  if (str[0] === ")") return false
  let stack = [str[0]]
  for (let i = 1; i < str.length; i++) {
    var char = str[i]
    if (stack[stack.length - 1] === "(") {
      if (char === ')') stack.pop()
    } else if (char === `(`) {
      stack.push(char)
    } else if ((char === `)` && stack[stack.length - 1] !== "(" )) {
      return false
    }
  }
  return true
  */
  let count = 0
  for (let i = 0; i < str.length; i++) {
    var char = str[i]
    if (char === "(") {
      count++
    } else if (char === ")" && count === 0) {
      return false
    } else if (char === ")" && count >= 1) {
      count--
    }
  }
  return count === 0
};