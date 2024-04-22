function largestNumber(A) {
    // Convert integers to strings
    A = A.map(num => num.toString());
    
    // Custom comparison function
    function compare(x, y) {
        const xy = x + y;
        const yx = y + x;
        // Compare the concatenation of x and y with y and x to form the largest number
        if (xy > yx) return -1;
        else if (xy < yx) return 1;
        else return 0;
    }
    
    // Sort the list using the custom comparison function
    A.sort(compare);
    
    // Join the sorted strings and return
    return A.join(''); // Join the sorted strings to form the largest number
}

// Example usage
const A = [8, 89];
console.log(largestNumber(A)); // Output: "898"
