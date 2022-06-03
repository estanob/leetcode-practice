function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/** Add Two Numbers II */
function addTwoNumbers (l1, l2) {
  let listSum = (getNumValue(l1) + getNumValue(l2)).toString();
  console.log("List Sum:", listSum);
  let addedList = new ListNode(0)
  let tail = addedList
  while (listSum.length > 0) {
    tail.next = new ListNode(parseInt(listSum[0]))
    tail = tail.next
    listSum = listSum.slice(1)
  }
  // for (let i = 0; i < listSum.length; i++) {
  //   let numChar = listSum[i]
  //   let listNode = new ListNode(parseInt(numChar))
  //   tail.next = listNode
  //   tail = listNode
  // }
  return addedList.next
}

function getNumValue (list) {
  let numStr = ""
  while (list) {
    numStr += list.val
    list = list.next
  }
  return parseInt(numStr)
}

console.log("Test Case1:", addTwoNumbers(
  new ListNode(7, new ListNode(8, new ListNode(0, new ListNode(7)))),
  new ListNode(5, new ListNode(6, new ListNode(4)))
));

console.log("Test Case2:", addTwoNumbers(
  new ListNode(2, new ListNode(4, new ListNode(4))),
  new ListNode(5, new ListNode(6, new ListNode(4)))
));