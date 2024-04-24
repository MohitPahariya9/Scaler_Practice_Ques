function evaluateRPN(A) {
    const stack = [];
    
    for (let token of A) {
        if (token === '+') {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            stack.push(operand1 + operand2);
        } else if (token === '-') {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            stack.push(operand1 - operand2);
        } else if (token === '*') {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            stack.push(operand1 * operand2);
        } else if (token === '/') {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            stack.push(Math.trunc(operand1 / operand2)); // Using trunc to get integer division
        } else {
            stack.push(parseInt(token)); // Push operand to the stack
        }
    }
    
    return stack.pop(); // Return the final result
}

// Test cases
const A1 = ["2", "1", "+", "3", "*"];
const A2 = ["4", "13", "5", "/", "+"];
console.log(evaluateRPN(A1)); // Output: 9
console.log(evaluateRPN(A2)); // Output: 6
