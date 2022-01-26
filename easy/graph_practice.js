/** Find if Path Exists in Graph */
// let n1 = 3, edges1 = [[0,1],[1,2],[2,0]], source1 = 0, destination1 = 2;
// let n2 = 6, edges2 = [[0,1],[0,2],[3,5],[5,4],[4,3]], source2 = 0, destination2 = 5;

var validPath = function (n, edges, source, destination) {
  let graphHash = {};
  edges.forEach(([u, v]) => {
    if (!graphHash[u]) {
      graphHash[u] = [v]
    } else graphHash[u].push(v)
    if (!graphHash[v]) {
      graphHash[v] = [u]
    } else graphHash[v].push(u)
  })
  let seen = new Array(n).fill(false);
  let queue = [source];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === destination) return true;
    seen[node] = true;
    graphHash[node].forEach(neighbor => {
      if (!seen[neighbor]) {
        queue.push(neighbor)
      };
    });
  };
  return false;
};

// console.log("Test Case1:", validPath(n1, edges1, source1, destination1));
// console.log("Test Case2:", validPath(n2, edges2, source2, destination2));




















/** Find the Town Judge */
let n1 = 2, trust1 = [[1,2]];
let n2 = 3, trust2 = [[1,3],[2,3]];
let n3 = 3, trust3 = [[1,3],[2,3],[3,1]];

var findJudge = function (n, trust) {
  /** attempted solution */
  // if (trust.length === 1) return trust[0][1];
  // let i = 1;
  // while (i <= n) {
  //   for (let j = 0; j < trust.length; j++) {
  //     if (trust[j][1] !== i) i++
  //   }
  //   return i;
  // }
  // return -1;


  /** borrowed solution */
  // n = 3, trust = [[1,3],[2,3],[3,1]]
  const Trusted = new Array(n + 1).fill(0); // [0, 0, 0, 0]
  for (let [i, j] of trust) { // [1, 3], [2, 3], [3, 1]
    Trusted[i] -= 1; // [0, -1, 0, 1] [0, -1, -1, 2] [0, 0, -1, 1]
    Trusted[j] += 1;
  }
  for (let i = 1; i < Trusted.length; i++) { // Trusted = [0, 0, -1, 1]
    if ((n - 1) === Trusted[i]) { // n = 3, n - 1 = 2
      return i; // i = 1 -> Trusted[1] = 0, 0 = 2 ? false
                // i = 2 -> Trusted[2] = -1, -1 = 2 ? false
                // i = 3 -> Trusted[3] = 1, 1 = 2 ? false
                // return -1
    }
  }
  return -1;
};

console.log("Test Case1:", findJudge(n1, trust1));
console.log("Test Case2:", findJudge(n2, trust2));
console.log("Test Case3:", findJudge(n3, trust3));