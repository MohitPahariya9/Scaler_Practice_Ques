// Define maxAreaHistogram function
function maxAreaHistogram(heights) {
    const stack = [];
    let maxArea = 0;
    let i = 0;

    while (i < heights.length) {
        if (stack.length === 0 || heights[i] >= heights[stack[stack.length - 1]]) {
            stack.push(i);
            i++;
        } else {
            const top = stack.pop();
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, heights[top] * width);
        }
    }

    while (stack.length > 0) {
        const top = stack.pop();
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, heights[top] * width);
    }

    return maxArea;
}

module.exports = {
    maximalRectangle: function(A) {
        if (A.length === 0) return 0;

        const rows = A.length;
        const cols = A[0].length;
        const heights = new Array(cols).fill(0);
        let maxArea = 0;

        for (let i = 0; i < rows; i++) {
            // Update the heights array based on the current row
            for (let j = 0; j < cols; j++) {
                heights[j] = A[i][j] === '1' ? heights[j] + 1 : 0; // corrected '1' instead of 1
            }
            // Calculate the maximum area histogram for the current heights
            maxArea = Math.max(maxArea, maxAreaHistogram(heights));
        }

        return maxArea;
    }
};

// Example usage:
const A = [
    ['1', '1', '1'],
    ['0', '1', '1'],
    ['1', '0', '0']
];

console.log(module.exports.maximalRectangle(A)); // Output: 4
