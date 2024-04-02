function countDistinctOperations(A) {
    const MOD = 1000000007;
        let oddCount = 0;

        // Count the number of odd elements in the array
        for (let i = 0; i < A.length; i++) {
            if (A[i] % 2 !== 0) {
                oddCount++;
            }
        }

        // If the array already has an even product, no operations are needed
        if (oddCount === 0) {
            return 0;
        }

        // Otherwise, calculate 2^oddCount modulo MOD
        let result = 1;
        for (let i = 0; i < oddCount; i++) {
            result = (result * 2) % MOD;
        }

        // Subtracting 1 because the case where no operation is performed is not considered distinct
        return (result - 1 + MOD) % MOD; // Applying modulo operation
}  
// Test cases
console.log(countDistinctOperations([1, 3])); // Output: 3
console.log(countDistinctOperations([3]));    // Output: 1
console.log(countDistinctOperations([469,335]));    // Output: 1
