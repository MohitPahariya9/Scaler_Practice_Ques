// function sortAscending(arr) {
//     return arr.sort((a, b) => a - b);
// }
// // version1;
// // function findElementsLessThanOrEqualToB(A, B) {
// //     let low = 0;
// //     let high = A.length - 1;
// //     let result = [];

// //     while (low <= high) {
// //         let mid = Math.floor((low + high) / 2);

// //         // If current element is less than or equal to B,
// //         // add it to the result array and search in the right half
// //         if (A[mid] <= B) {
// //             result.push(A[mid]);
// //             low = mid + 1;
// //         } else {
// //             // If current element is greater than B,
// //             // search in the left half
// //             high = mid - 1;
// //         }
// //     }

// //     return result;
// // }

// // // Example usage:
// // const unsortedArray = [3, 1, 5, 2, 4];
// // const B = 3;
// // const sortedArray = sortAscending(unsortedArray);
// // console.log(sortedArray); // Output: [1, 2, 3, 4, 5]

// // const smallerOrEqualElements = findElementsLessThanOrEqualToB(sortedArray, B);
// // console.log(smallerOrEqualElements); // Output: [1, 2, 3]

// // version2;-
// function findElementsLessThanOrEqualToB(A, B) {
//     let result = [];
//     let nearestSmallerOrEqualValue = null;
//     for (let i = 0; i < A.length; i++) {
//         if (A[i] <= B) {
//             result.push(A[i]);
//             if (nearestSmallerOrEqualValue === null || A[i] > nearestSmallerOrEqualValue) {
//                 nearestSmallerOrEqualValue = A[i];
//         }
//     }
//     console.log("smaller or equal value:", nearestSmallerOrEqualValue);
//     return result;
// }
// }
// // Example usage:
// const unsortedArray = [3, 1, 5, 2, 4];
// const B = 3;
// const sortedArray = sortAscending(unsortedArray);
// console.log(sortedArray);
// const smallerOrEqualElements = findElementsLessThanOrEqualToB(sortedArray, B);
// console.log(smallerOrEqualElements);

// version3:-
// function findElementsLessThanOrEqualToB(A, B) {
//   let result = [];
//   for (let i = 0; i < A.length; i++) {
//     if (
//       A[i] <= B &&
//       (result.length === 0 || A[i] !== result[result.length - 1])
//     ) {
//       result.push(A[i]);
//     }
//   }
//   return result;
// }

// // Example usage:
// const A = [1, 3, 4, 4, 6];
// const B = 4;

// const result = findElementsLessThanOrEqualToB(A, B);
// console.log(result); // Output: [1, 3, 4]

function countElementsLessThanOrEqualToB(A, B) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] <= B) {
            count++;
        } else {
            // Since the array is sorted, no need to continue checking
            break;
        }
    }
    return count;
}

// Example usage:
const A = [1, 3, 2, 5, 6];
const B = 4;

const result = countElementsLessThanOrEqualToB(A, B);
console.log(result); 
