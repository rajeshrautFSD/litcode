var minOperations = function(nums) {
    let n = nums.length;
    let ops = 0;

    // Loop through the array until the third last element
    for (let i = 0; i < n - 2; i++) {
        if (nums[i] === 0) {
            // Flip 3 consecutive elements starting from i
            nums[i] ^= 1;
            nums[i + 1] ^= 1;
            nums[i + 2] ^= 1;
            ops++;
        }
    }

    // Check if the last two elements are 0, if yes, it's impossible
    if (nums[n - 2] === 0 || nums[n - 1] === 0) {
        return -1;
    }

    return ops;
};

// Example usage
console.log(minOperations([0, 1, 1, 1, 0, 0])); // Output: 3
console.log(minOperations([0, 1, 1, 1]));      // Output: -1
