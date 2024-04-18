function longestIncreasingSubsequence(A) {
    const n = A.length;
    if (n === 0) return 0;

    // Initialize an array to store the length of longest increasing subsequence ending at index i
    const dp = new Array(n).fill(1);

    // Iterate through the array
    for (let i = 1; i < n; i++) {
        // For each element, check all previous elements
        for (let j = 0; j < i; j++) {
            // If A[i] is greater than A[j], update the longest increasing subsequence ending at index i
            if (A[i] > A[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
            }
        }
    }

    // Find the maximum value in dp array
    let maxLength = 0;
    for (let i = 0; i < n; i++) {
        if (dp[i] > maxLength) {
            maxLength = dp[i];
        }
    }

    return maxLength;
}

// Test cases
console.log(longestIncreasingSubsequence([1, 2, 1, 5])); // Output: 3
console.log(longestIncreasingSubsequence([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15])); // Output: 6
