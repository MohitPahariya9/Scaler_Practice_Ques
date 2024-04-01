function maxSumFromBothEnds(A, B) {
    const N = A.length;

    // Calculate the prefix sum and suffix sum arrays.
    const prefixSum = [0];
    for (let i = 0; i < N; i++) {
        prefixSum.push(prefixSum[prefixSum.length - 1] + A[i]);
    }

    const suffixSum = [0];
    for (let i = N - 1; i >= 0; i--) {
        suffixSum.push(suffixSum[suffixSum.length - 1] + A[i]);
    }

    let maxSum = -Infinity;

    // Iterate over the possible combinations of B elements from both ends.
    for (let left = 0; left <= B; left++) {
        const right = B - left;

        const currentSum = prefixSum[left] + suffixSum[right];

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example usage:
const A = [5, -2, 3 , 1, 2 ];
const B = 3;
console.log(maxSumFromBothEnds(A, B)); // Output: 6253
