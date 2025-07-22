class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

class Solution {
  insert(head, x) {
    let temp = new ListNode(x)
    temp.next = head
    head = temp
    return head
  }
}

function print(head) {
  let temp = head
  while (temp !== null) {
    process.stdout.write(temp.val + " ")
    temp = temp.next
  }
  console.log()
}
let arr = [20, 30, 40]
let x = 10
let head = new ListNode(arr[0])
head.next = new ListNode(arr[1]);
head.next.next = new ListNode(arr[2]);

let sol = new Solution();
head = sol.insert(head, x);

print(head);