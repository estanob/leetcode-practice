class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(arr) {
    arr.push(this.name)
    for (let child of this.children) {
      child.depthFirstSearch(arr);
    }
    return arr;
  }
}

let nodeA = new Node('A');
let nodeB = new Node("B");
let nodeC = new Node("C");
let nodeD = new Node("D");
let nodeE = new Node("E");
let nodeF = new Node("F");
let nodeG = new Node("G");
let nodeH = new Node("H");
let nodeI = new Node("I");
let nodeJ = new Node("J");
let nodeK = new Node("K");
nodeB.addChild(nodeE.name);
nodeB.addChild(nodeF.name);
nodeF.addChild(nodeI.name);
nodeF.addChild(nodeJ.name);
nodeD.addChild(nodeG.name);
nodeD.addChild(nodeH.name);
nodeG.addChild(nodeK.name);
nodeA.addChild(nodeB.name);
nodeA.addChild(nodeC.name);
nodeA.addChild(nodeD.name);

// console.log("All nodes have been created and connected:", nodeA, nodeB, nodeC, nodeD, nodeF, nodeG)

console.log("Now, let's test it out:", "Dept First Search", nodeA.depthFirstSearch([]))
console.log("Node B:", nodeB)
console.log("Node F:", nodeF)
console.log("Node B DFS:", nodeB.depthFirstSearch([]))