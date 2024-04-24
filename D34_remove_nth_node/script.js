// Definition of ListNode class
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Helper function to convert array to linked list
function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    var head = new ListNode(arr[0]);
    var current = head;
    for (var i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    var result = [];
    var current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Main function to remove nth node from end of linked list
var removeNthFromEnd = function(A, B) {
    var dummy = new ListNode(0);
    dummy.next = A;
    
    var first = dummy;
    var second = dummy;
    
    // Move first pointer B+1 steps ahead
    for (var i = 0; i <= B; i++) {
        first = first.next;
    }
    
    // Move both pointers simultaneously until first reaches the end
    while (first != null) {
        first = first.next;
        second = second.next;
    }
    
    // Remove the B-th node from the end
    second.next = second.next.next;
    
    return dummy.next; // Return the updated head of the list
};

// Example usage:
const A1 = arrayToLinkedList([1, 2, 3, 4, 5]);
const B1 = 4;
console.log(linkedListToArray(removeNthFromEnd(A1, B1))); // Output: [1, 2, 3, 5]

const A2 = arrayToLinkedList([1]);
const B2 = 1;
console.log(linkedListToArray(removeNthFromEnd(A2, B2))); // Output: []
