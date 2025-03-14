function maxCandies(candies, k) {
    if (k === 0) return 0; // Edge case: No children to distribute to

    let left = 1;
    let right = Math.max(...candies);
    let result = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let count = candies.reduce((sum, c) => sum + Math.floor(c / mid), 0);

        if (count >= k) {
            result = mid; // Valid case, try for a larger value
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

// Example Usage
console.log(maxCandies([5, 8, 6], 3)); // Output: 5
console.log(maxCandies([2, 5, 7, 10], 4)); // Output: 3
