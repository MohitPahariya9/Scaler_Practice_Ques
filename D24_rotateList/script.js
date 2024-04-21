function ListNode(val) {
    this.val = val;
    this.next = null;
}

var rotateRight = function(A, B) {
    if (!A || B === 0) return A;

    let length = 1;
    let tail = A;

    // Find the length of the list and locate the tail node
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // If B is multiple of length, the list remains unchanged
    B = B % length;
    if (B === 0) return A;

    // Locate the new tail (the node before the new head after rotation)
    let newTail = A;
    for (let i = 1; i < length - B; i++) {
        newTail = newTail.next;
    }

    // Rotate the list
    tail.next = A;
    A = newTail.next;
    newTail.next = null;

    return A;
};

// Example usage:
// Constructing the example linked list: 1->2->3->4->5->NULL
let A = new ListNode(1);
A.next = new ListNode(2);
A.next.next = new ListNode(3);
A.next.next.next = new ListNode(4);
A.next.next.next.next = new ListNode(5);

let B = 2;
console.log(rotateRight(A, B));
