function canCompleteCircuit(A, B) {
    const n = A.length;
    let totalGas = 0, currentGas = 0, startStation = 0;

    for (let i = 0; i < n; i++) {
        totalGas += A[i] - B[i];
        currentGas += A[i] - B[i];

        // If at any station, current gas becomes negative,
        // reset startStation to the next station and reset currentGas.
        if (currentGas < 0) {
            startStation = i + 1;
            currentGas = 0;
        }
    }

    // If totalGas is negative, it means the total gas consumed is more than available gas,
    // hence, it's impossible to complete the circuit.
    return totalGas >= 0 ? startStation : -1;
}

// Test
const A = [1, 2];
const B = [2, 1];
console.log(canCompleteCircuit(A, B)); // Output: 1

// This function iterates through each station, maintaining a totalGas variable that accumulates the difference between the gas available at each station and the gas required to reach the next station. If at any station, the currentGas becomes negative, it resets the startStation to the next station and resets the currentGas. Finally, it returns the startStation if the totalGas is non-negative, indicating that it's possible to complete the circuit, otherwise, it returns -1.