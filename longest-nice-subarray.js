/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let start = 0;
    let currentAND = 0;
    let maxLength = 0;

    for (let end = 0; end < nums.length; end++) {
        // Check if adding nums[end] violates the AND condition
        while ((currentAND & nums[end]) !== 0) {
            // Remove nums[start] from the window
            currentAND ^= nums[start];
            start++;
        }

        // Add nums[end] to the current window
        currentAND |= nums[end];

        // Update max length of the nice subarray
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};


 