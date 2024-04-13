function lexicographicallyLargestArray(A) {
    let i=0;
    for(;i<A.length;i++) {
        if(A[i]<A[A.length-1]) break;
    }
    return [...A.slice(0,i), ...A.slice(i).reverse()]
}

// Test cases
console.log(lexicographicallyLargestArray([4, 1, 3, 2]));  // Output: [4, 2, 3, 1]
console.log(lexicographicallyLargestArray([10, 20, 30, 40]));  // Output: [40, 30, 20, 10]
