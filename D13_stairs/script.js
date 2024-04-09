function climbStairs(A) {
    if (A === 0 || A === 1) {
        return 1; // There's only one way to climb when there are 0 or 1 steps
    }
    
    let dp = new Array(A + 1);
    dp[0] = 1; // Base case for 0 steps
    dp[1] = 1; // Base case for 1 step
    
    for (let i = 2; i <= A; i++) {
        // Number of ways to reach step i is the sum of ways to reach step (i-1) and step (i-2)
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[A];
}

// Test cases
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
