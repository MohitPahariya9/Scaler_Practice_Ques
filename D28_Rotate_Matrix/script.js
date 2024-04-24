function rotateMatrix(matrix) {
    const n = matrix.length;

    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Reverse each row
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }
}

// Test cases
let matrix1 = [
    [1, 2],
    [3, 4]
];
rotateMatrix(matrix1);
console.log(matrix1); // Output should be [[3, 1], [4, 2]]

let matrix2 = [
    [1]
];
rotateMatrix(matrix2);
console.log(matrix2); // Output should be [[1]]
