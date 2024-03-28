// FizzBuzz function
function fizzBuzz(A) {
    if (typeof A !== 'number' || A <= 0 || Math.floor(A) !== A) {
        // Handle invalid input
        console.error("Invalid input. Please provide a positive integer greater than zero.");
        return [];
    }

    var result = [];
    for (var i = 1; i <= A; i++) {
        var output = "";

        if (i % 3 == 0) { output += "Fizz"; }
        if (i % 5 == 0) { output += "Buzz"; }

        if (output == "") { output = i.toString(); }
        result.push(output);
    }
    return result;
}

// Test cases
function testFizzBuzz() {
    // Test Case 1: Valid Input
    var input1 = 15;
    var expectedOutput1 = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'];
    var result1 = fizzBuzz(input1);
    console.log("Test Case 1 - Valid Input:");
    console.log("Input:", input1);
    console.log("Expected Output:", expectedOutput1);
    console.log("Actual Output:", result1);
    console.log("Test Result:", arraysEqual(result1, expectedOutput1) ? "Passed" : "Failed");

    // Test Case 2: Invalid Input (Negative Number)
    var input2 = -5;
    var expectedOutput2 = [];
    var result2 = fizzBuzz(input2);
    console.log("\nTest Case 2 - Invalid Input (Negative Number):");
    console.log("Input:", input2);
    console.log("Expected Output:", expectedOutput2);
    console.log("Actual Output:", result2);
    console.log("Test Result:", arraysEqual(result2, expectedOutput2) ? "Passed" : "Failed");
}

// Function to compare arrays
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Run the test cases
testFizzBuzz();
