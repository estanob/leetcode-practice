/*
Gameplan:
Base Case1:
    If head is null, return 0
Base Case2:
    If head has no next, return head value

Keep adding until head is null
*/

const sumList = (head) => {
  // todo
  if (head === null) return 0
  if (head.next === null) return head.val;
  
  let sum = head.val;
  sum += sumList(head.next)
  return sum;
};





/*
Use a counter variable
0-indexed like string and array
increase counter when traversing linked list
when counter equals index, return current node's value
*/
const getNodeValue = (head, index) => {
  // todo
  let counter = 0;
  // if (head.next === null && counter < index) return null;
  let currentNode = head
  while (counter < index) {
    if (currentNode.next === null && counter < index) return null;
    currentNode = currentNode.next
    counter++
  }
  return currentNode.val;
};