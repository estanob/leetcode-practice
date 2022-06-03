/** Knight Dialer */
function knightDialer (n) {
  const paths = [
    [4, 6], //                  0
    [6, 8], [7, 9], [4, 8], //  1 2 3
    [3, 9, 0], [], [1, 7, 0], //4 5 6
    [2, 6], [1, 3], [2, 4]//    7 8 9
  ]
  const mod = 10 ** 9 + 7

}

// function knightDialer(N) {
//   let moves = [[4, 6], [6, 8], [7, 9], [4, 8], [3, 9, 0], [], [1, 7, 0], [2, 6], [1, 3], [2, 4]];
//   let dp = new Array(10).fill(1);
//   while (N > 1) {
//     let next = new Array(10).fill(0);
//     for (let i = 0; i < dp.length; i++) {
//       for (let neighbor of moves[i]) {
//         next[i] += dp[neighbor];
//         next[i] %= (Math.pow(10, 9) + 7);
//       }
//     }
//     N--;
//     dp = next;
//     for (let i = 0; i < 5; i++) {
//       console.log("Dynamic Programming Array:", dp)
//     }
//   }
//   return dp.reduce((acc, val) => acc + val, 0) % (Math.pow(10, 9) + 7);
// };