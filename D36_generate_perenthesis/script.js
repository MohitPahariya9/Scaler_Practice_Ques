function isBalanced(A) {
    let stack = [];
    const opening = '([{';
    const closing = ')]}';
    
    for (let char of A) {
        if (opening.includes(char)) {
            stack.push(char);
        } else if (closing.includes(char)) {
            if (stack.length === 0) return 0; // Unbalanced, no opening bracket to match
            let lastOpening = stack.pop();
            if (opening.indexOf(lastOpening) !== closing.indexOf(char)) {
                return 0; // Unbalanced, mismatched brackets
            }
        }
    }
    
    return stack.length === 0 ? 1 : 0; // If stack is empty, all brackets were matched
}

// Test cases
console.log(isBalanced("()[]{}")); // Output: 1
console.log(isBalanced("([)]"));   // Output: 0
