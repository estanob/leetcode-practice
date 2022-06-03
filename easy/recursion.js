/** Fibonacci Number */
function fib (n) {
  if (n === 0 || n === 1) return 1;
  return fib(n - 1) + fib(n - 2)
}

function tribonacci (n) {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
}