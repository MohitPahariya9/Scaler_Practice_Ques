function findMajorityElement(A) {
    let candidate = null;
    let count = 0;

    // Finding potential majority candidate
    for (let i = 0; i < A.length; i++) {
        if (count === 0) {
            candidate = A[i];
            count = 1;
        } else if (A[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Confirming the candidate is the majority element
    count = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === candidate) {
            count++;
        }
    }
    
    if (count > Math.floor(A.length / 2)) {
        return parseInt(candidate); // Explicit type conversion
    } else {
        return null; // No majority element found
    }
}

// Example usage:
const A = [100];
console.log(findMajorityElement(A)); // Output: 100
