function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;
  
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  
    return prev; // New head of the reversed linked list
  }
  
  // Example usage:
  const list = new ListNode(1);
  list.next = new ListNode(2);
  list.next.next = new ListNode(3);
  list.next.next.next = new ListNode(4);
  list.next.next.next.next = new ListNode(5);
  
  const reversedList = reverseLinkedList(list);
  
  // Print the reversed linked list
  let current = reversedList;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
  