function maxProfit(A) {
    let totalProfit = 0;
    for (let i = 1; i < A.length; i++) {
        if (A[i] > A[i - 1]) {
            totalProfit += A[i] - A[i - 1];
        }
    }
    return totalProfit;
}

// Example usage:
const A1 = [1, 2, 3];
const A2 = [5, 2, 10];

console.log(maxProfit(A1)); // Output: 2
console.log(maxProfit(A2)); // Output: 8
