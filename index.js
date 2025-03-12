function maximumCount(nums) {
    let negCount = 0, posCount = 0;

    // Loop through the array to count negative and positive numbers
    for (let num of nums) {
        if (num < 0) {
            negCount++;
        } else if (num > 0) {
            posCount++;
        }
    }

    return Math.max(negCount, posCount);
}

// Test cases
console.log(maximumCount([-2, -1, -1, 1, 2, 3])); // Output: 3
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])); // Output: 3
console.log(maximumCount([5, 20, 66, 1314])); // Output: 4