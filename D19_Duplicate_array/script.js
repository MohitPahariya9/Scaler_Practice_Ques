function findDuplicate(A) {
    let slow = A[0];
    let fast = A[0];

    // Phase 1: Detecting if there's a cycle
    do {
        slow = A[slow];
        fast = A[A[fast]];
    } while (slow !== fast);

    // Phase 2: Finding the entry point of the cycle
    fast = A[0];
    while (slow !== fast) {
        slow = A[slow];
        fast = A[fast];
    }

    return slow;

}

// Test cases
console.log(findDuplicate([3, 4, 1, 4, 2])); 
console.log(findDuplicate([1, 2, 3]));       
console.log(findDuplicate([3, 4, 1, 4, 1]));
