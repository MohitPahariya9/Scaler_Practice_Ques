// function generatePascalsTriangle(numRows) {
//     if (numRows === 0) return [];
    
//     let pascalTriangle = [[1]]; // Initialize with the first row
    
//     for (let i = 1; i < numRows; i++) {
//         let row = [1]; // Initialize the row with 1
        
//         for (let j = 1; j < i; j++) {
//             row.push(pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j]);
//         }
        
//         row.push(1); // Add the final 1 to the row
//         pascalTriangle.push(row); // Add the row to the triangle
//     }
    
//     return pascalTriangle;
// }

// // Example usage:
// const numRows = 5;
// const result = generatePascalsTriangle(numRows);
// console.log(result);

function generatePascalsTriangle(numRows) {
    if (numRows === 0) return [];
    
    let pascalTriangle = [[1]]; // Initialize with the first row
    
    for (let i = 1; i < numRows; i++) {
        let row = [1]; // Initialize the row with 1
        
        for (let j = 1; j < i; j++) {
            row.push(pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j]);
        }
        
        row.push(1); // Add the final 1 to the row
        pascalTriangle.push(row); // Add the row to the triangle
    }
    
    return pascalTriangle;
}

function generatePascalsTriangleWrapper(A) {
    return generatePascalsTriangle(A);
}

function displayPascalsTriangle(triangle) {
    for (let row of triangle) {
        let spaces = ' '.repeat((triangle.length - row.length) * 3);
        console.log(spaces + row.join('   '));
    }
}

// Example usage:
const numRows = 5;
const triangle = generatePascalsTriangleWrapper(numRows);
displayPascalsTriangle(triangle);
