function minCandies(A) {
  const n = A.length;
  const left = new Array(n).fill(1);
  const right = new Array(n).fill(1);
  //to fill other methods:-
  // const left = [];
  // for (let i = 0; i < n; i++) {
  //     left.push(1);
  // }
  // const right = [];
  // for (let i = 0; i < n; i++) {
  //     right.push(1);
  // }

  //other:-
  //     const left = Array.from({ length: n }, () => 1);
  // const right = Array.from({ length: n }, () => 1);

  // Traverse from left to right, if the current child's rating is greater than the previous one,
  // give the current child one more candy than the previous one.
  for (let i = 1; i < n; i++) {
    if (A[i] > A[i - 1]) {
      left[i] = left[i - 1] + 1;
    }
  }

  // Traverse from right to left, if the current child's rating is greater than the next one,
  // give the current child one more candy than the next one.
  for (let i = n - 2; i >= 0; i--) {
    if (A[i] > A[i + 1]) {
      right[i] = right[i + 1] + 1;
    }
  }

  // Calculate the total number of candies required by taking the maximum value at each position between left and right arrays.
  let totalCandies = 0;
  for (let i = 0; i < n; i++) {
    totalCandies += Math.max(left[i], right[i]);
  }

  return totalCandies;
}

// Test cases
console.log(minCandies([1, 2])); // Output: 3
console.log(minCandies([1, 5, 2, 1])); // Output: 7
