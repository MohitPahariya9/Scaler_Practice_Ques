function findDuplicateAndMissing(nums) {
    let duplicate = -1;
    let missing = -1;
    let i = 0;
    
    while (i < nums.length) {
        if (nums[i] !== i + 1) {
            const correctIndex = nums[i] - 1;
            if (nums[i] !== nums[correctIndex]) {
                // Swap nums[i] and nums[correctIndex]
                [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
            } else {
                duplicate = nums[i];
                i++;
            }
        } else {
            i++;
        }
    }
    
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== j + 1) {
            missing = j + 1;
            break;
        }
    }
    
    return [duplicate, missing];
}

// Test
const input = [3, 1, 2, 5, 3];
console.log(findDuplicateAndMissing(input)); // Output: [3, 4]