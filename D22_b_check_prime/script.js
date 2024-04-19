// function isPrime(N) {
//     if (N <= 1) {
//         return 0; // 0 represents false
//     }
//     if (N <= 3) {
//         return 1; // 1 represents true
//     }
//     if (N % 2 === 0 || N % 3 === 0) {
//         return 0; // 0 represents false
//     }
//     for (let i = 5; i * i <= N; i = i + 6) {
//         if (N % i === 0 || N % (i + 2) === 0) {
//             return 0; // 0 represents false
//         }
//     }
//     return 1; // 1 represents true
// }

// // Example usage:
// const number = 7;
// console.log(isPrime(number)); // Output: 1
function isPrime(N) {
    if (N <= 1) {
        return "No"; // Return "No" if N is less than or equal to 1
    }
    if (N <= 3) {
        return "Yes"; // Return "Yes" if N is 2 or 3
    }
    if (N % 2 === 0 || N % 3 === 0) {
        return "No"; // Return "No" if N is divisible by 2 or 3
    }
    for (let i = 5; i * i <= N; i = i + 6) {
        if (N % i === 0 || N % (i + 2) === 0) {
            return "No"; // Return "No" if N is divisible by i or i + 2
        }
    }
    return "Yes"; // Return "Yes" if N passes all conditions
}

// Example usage:
const number = 4;
console.log(isPrime(number)); // Output: Yes
