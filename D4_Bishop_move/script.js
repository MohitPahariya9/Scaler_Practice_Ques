function countSquares(A, B) {
    // Function to calculate the minimum of two numbers
    const min = (a, b) => a < b ? a : b;

    // Function to calculate the maximum of two numbers
    const max = (a, b) => a > b ? a : b;

    // Count squares in up-left direction
    const upLeft = min(A, B) - 1;

    // Count squares in up-right direction
    const upRight = min(A, 9 - B) - 1;

    // Count squares in down-left direction
    const downLeft = min(9 - A, B) - 1;

    // Count squares in down-right direction
    const downRight = min(9 - A, 9 - B) - 1;

    // Sum up the counts from all four directions
    const totalSquares = upLeft + upRight + downLeft + downRight;

    return totalSquares;
}

// test
const A = 4;
const B = 4;
console.log(countSquares(A, B)); 