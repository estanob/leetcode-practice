class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = undefined ? null : next
  }
}

function middleNode (head) {
  let nodeArr = []
  let currentNode = head
  while (currentNode) {
    nodeArr.push(currentNode)
    if (currentNode.next) {
      currentNode = currentNode.next
    } else {
      currentNode = null
    }
  }
  // console.log("List Stack", nodeArr);
  return nodeArr[Math.floor(nodeArr.length / 2)]
}

const node5 = new ListNode (5)
const node4 = new ListNode (4, node5)
const node3 = new ListNode (3, node4)
const node2 = new ListNode (2, node3)
const node1 = new ListNode (1, node2)

const node6 = new ListNode (6)
const nodeFive = new ListNode (5, node6)
const nodeFour = new ListNode (4, nodeFive)
const nodeThree = new ListNode (3, nodeFour)
const nodeTwo = new ListNode (2, nodeThree)
const nodeOne = new ListNode (1, nodeTwo)

console.log("Test Case1:", middleNode(node1));
console.log("Test Case2:", middleNode(nodeOne));
// console.log("List1:", node1);
// console.log("List2:", nodeOne);
// console.log("Node5", nodeFive);