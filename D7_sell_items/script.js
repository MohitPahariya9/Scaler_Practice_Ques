function weeksToSellUnits(A, B) {
    // Calculate total days needed to sell B units
    let totalDays = Math.ceil(B / A); // Total days without considering weekends
    
    // Adjust for weekends
    let weekends = Math.floor(totalDays / 5) * 2; // Calculate number of weekends
    let remainingDays = totalDays % 5; // Calculate remaining days after considering weekends
    
    // If remaining days exceed the capacity of a week, add extra weekend days
    if (remainingDays > 0) {
        if (remainingDays === 1) {
            weekends++; // If there's one remaining day, add one more day to account for the weekend
        } else if (remainingDays > 2) {
            weekends += 2; // If there are more than two remaining days, we need to add two more days to account for the weekend
        }
    }
    
    // Calculate total days considering weekends
    totalDays += weekends;
    
    // Calculate number of weeks
    let weeks = Math.ceil(totalDays / 7);
    
    return weeks;
}

// Test cases
console.log(weeksToSellUnits(5, 46)); // Output: 2
console.log(weeksToSellUnits(3, 17));  // Output: 2
console.log(weeksToSellUnits(1, 1));   // Output: 1
