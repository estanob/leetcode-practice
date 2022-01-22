/** Find if Path Exists in Graph */
let n1 = 3, edges1 = [[0,1],[1,2],[2,0]], source1 = 0, destination1 = 2;
let n2 = 6, edges2 = [[0,1],[0,2],[3,5],[5,4],[4,3]], source2 = 0, destination2 = 5;

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

console.log("Test Case1:", validPath(n1, edges1, source1, destination1));
console.log("Test Case2:", validPath(n2, edges2, source2, destination2));