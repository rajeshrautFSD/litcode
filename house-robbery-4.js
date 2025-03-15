function minCapability(nums, k) {
    let left = Math.min(...nums);
    let right = Math.max(...nums);
    
    function canRob(capability) {
        let count = 0;
        let i = 0;
        while (i < nums.length) {
            if (nums[i] <= capability) {
                count++;
                i++; // Skip next house since adjacent houses cannot be robbed
            }
            i++; // Move to next house
        }
        return count >= k;
    }
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canRob(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}

// Example test cases
console.log(minCapability([2, 3, 5, 9], 2)); // Output: 5
console.log(minCapability([2, 7, 9, 3, 1], 2)); // Output: 2
