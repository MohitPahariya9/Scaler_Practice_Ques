const solution = {
    solve: function(A) {
        let words = A.split(/\s+/);

        // Reverse the list of words
        let reversedWords = words.reverse();

        // Join the reversed words with single spaces
        let reversedString = reversedWords.join(' ');

        return reversedString.trim(); // Remove leading and trailing spaces
    }
};

// Test cases
const testCases = [
    "Hello World",
    "   Hello   World   ",
    "Lorem ipsum dolor sit amet",
    "  Lorem  ipsum  dolor  sit  amet  ",
    "123 456 789"
];

// Run test cases
testCases.forEach((testCase, index) => {
    const result = solution.solve(testCase);
    console.log(`Test Case ${index + 1}: Input - "${testCase}", Output - "${result}"`);
});
