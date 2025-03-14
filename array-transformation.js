/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
    const n = nums.length;

    // Helper function to check if nums becomes a zero array after applying k queries
    function canMakeZero(k) {
        let tempNums = [...nums]; // Copy original nums
        let diff = new Array(n + 1).fill(0); // Difference array

        // Apply the first `k` queries using the difference array
        for (let i = 0; i < k; i++) {
            let [l, r, val] = queries[i];
            diff[l] -= val;
            if (r + 1 < n) {\

                
                diff[r + 1] += val;
            }
        }

        // Apply the difference array to tempNums
        let currentChange = 0;
        for (let j = 0; j < n; j++) {
            currentChange += diff[j];
            tempNums[j] = Math.max(0, tempNums[j] + currentChange);
        }

        // Check if tempNums is all zeros
        return tempNums.every(x => x === 0);
    }

    // ** Edge case: If nums is already all zeros, return 0 **
    if (nums.every(x => x === 0)) return 0;

    // Binary search to find the minimum k
    let left = 1, right = queries.length, answer = -1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (canMakeZero(mid)) {
            answer = mid;  // Found a valid k, try a smaller k
            right = mid - 1;
        } else {
            left = mid + 1; // Increase k
        }
    }

    return answer;
};

// Test Cases
console.log(minZeroArray([2, 0, 2], [[0,2,1], [0,2,1], [1,1,3]])); // Output: 2
console.log(minZeroArray([4,3,2,1], [[1,3,2], [0,2,1]])); // Output: -1
console.log(minZeroArray([0], [[0,0,2],[0,0,4],[0,0,4],[0,0,3],[0,0,5]])); // Output: 