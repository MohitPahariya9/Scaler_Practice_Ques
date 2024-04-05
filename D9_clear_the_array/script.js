function minOperationsToDeleteAllElements(A) {
    // Count the frequency of each element
    let frequency = {};
    for (let num of A) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    
    // Find the maximum frequency
    let maxFrequency = 0;
    for (let key in frequency) {
        maxFrequency = Math.max(maxFrequency, frequency[key]);
    }
    
    // Minimum number of operations = Maximum frequency
    return maxFrequency;
}

// Example usage:
const A1 = [3, 1, 3];
const A2 = [1, 1];

console.log(minOperationsToDeleteAllElements(A1)); // Output: 2
console.log(minOperationsToDeleteAllElements(A2)); // Output: 2
