// function minStepsToTurnOnAllBulbs(A) {
//     // For A <= 2, only two steps are needed
//     if (A <= 2) return 2;
    
//     // For A > 2, calculate the number of steps required
//     // If A is odd, all odd numbered bulbs will be turned on in one step,
//     // and all even numbered bulbs will be turned on in the next step.
//     // If A is even, all even numbered bulbs will be turned on in one step,
//     // and all odd numbered bulbs will be turned on in the next step.
//     return (A % 2 === 0) ? 2 : 1;
// }

// version 2:-
function minStepsToTurnOnAllBulbs(A){
    let bulbs = Math.floor(A/6)*2;
    switch (A%6) {
        case 1:
            bulbs += 1; // x
            break;
        case 2:
        case 3:
        case 4:
        case 5:
            bulbs += 2; // x x x x
            break;
    }
    return bulbs;
}

// Test cases
// console.log(minStepsToTurnOnAllBulbs(3)); // Output: 2
// console.log(minStepsToTurnOnAllBulbs(1)); // Output: 1
console.log(minStepsToTurnOnAllBulbs(4)); // Output: 2 (corrected)
