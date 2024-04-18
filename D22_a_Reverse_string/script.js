function reverseString(str) {
    // Create an empty stack
    const stack = [];

    // Push each character of the string onto the stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    let reversedString = '';

    // Pop each character from the stack to construct the reversed string
    while (stack.length > 0) {
        reversedString += stack.pop();
    }

    return reversedString;
}

// Test the function
const inputString = "abhi";
const reversedString = reverseString(inputString);
console.log(reversedString); 
