function trapRainWater(A) {
    let res = 0;
    const n = A.length;
    const left = Array(n).fill(0);
    const right = Array(n).fill(0);
    let l = Number.MIN_SAFE_INTEGER;
    let r = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
        left[i] = Math.max(l, A[i]);
        l = left[i];
        right[n - i - 1] = Math.max(r, A[n - i - 1]);
        r = right[n - i - 1];
    }

    for (let i = 0; i < n; i++) {
        res += Math.min(left[i], right[i]) - A[i];
    }

    return res;
}

// function trapRainWater(A) {
//     let left = 0;
//     let right = A.length - 1;
//     let leftMax = 0;
//     let rightMax = 0;
//     let waterTrapped = 0;

//     while (left < right) {
//         if (A[left] < A[right]) {
//             if (A[left] >= leftMax) {
//                 leftMax = A[left];
//             } else {
//                 waterTrapped += leftMax - A[left];
//             }
//             left++;
//         } else {
//             if (A[right] >= rightMax) {
//                 rightMax = A[right];
//             } else {
//                 waterTrapped += rightMax - A[right];
//             }
//             right--;
//         }
//     }

//     return waterTrapped;
// }

// Test cases
console.log(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trapRainWater([1, 2])); // Output: 0
