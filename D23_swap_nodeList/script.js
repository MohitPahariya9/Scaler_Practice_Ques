// Definition for singly-linked list.
function ListNode(data) {
    this.data = data;
    this.next = null;
}

function printLinkedList(head) {
    let current = head;
    while (current) {
        process.stdout.write(current.data + " -> ");
        current = current.next;
    }
    process.stdout.write("null\n");
}

module.exports = { 
    //param A : head node of linked list
    //return the head node in the linked list
    swapPairs : function(A){
        // If the list is empty or has only one node
        if (!A || !A.next) {
            return A;
        }
        
        // Initialize pointers for swapping
        let prev = null;
        let current = A;
        let next = null;
        let newHead = A.next; // New head after swapping
        
        // Traverse the list and swap pairs
        while (current && current.next) {
            next = current.next;
            current.next = next.next;
            next.next = current;
            if (prev) {
                prev.next = next;
            }
            prev = current;
            current = current.next;
        }
        
        return newHead;
    }
};

// Example usage
// Example 1
const A1 = new ListNode(1);
A1.next = new ListNode(2);
A1.next.next = new ListNode(3);
A1.next.next.next = new ListNode(4);
console.log("Original linked list:");
printLinkedList(A1);
const mergedAndSwappedHead1 = module.exports.swapPairs(A1);
console.log("After merging and swapping adjacent nodes:");
printLinkedList(mergedAndSwappedHead1);

// Example 2
const A2 = new ListNode(7);
A2.next = new ListNode(2);
A2.next.next = new ListNode(1);
console.log("Original linked list:");
printLinkedList(A2);
const mergedAndSwappedHead2 = module.exports.swapPairs(A2);
console.log("After merging and swapping adjacent nodes:");
printLinkedList(mergedAndSwappedHead2);
