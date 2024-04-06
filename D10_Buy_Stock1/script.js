function maxProfit(A) {
    if (A.length === 0) {
        return 0;
    }
    
    let minPrice = A[0];
    let maxProfit = 0;
    
    for (let i = 0; i < A.length; i++) {
        minPrice = Math.min(minPrice, A[i]);
        maxProfit = Math.max(maxProfit, A[i] - minPrice);
    }
    
    return maxProfit;
}

// Example usage:
const A1 = [1, 2];
const A2 = [1, 4, 5, 2, 4];

console.log(maxProfit(A1)); // Output: 1
console.log(maxProfit(A2)); // Output: 4
