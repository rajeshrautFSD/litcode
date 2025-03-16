function minRepairTime(ranks, cars) {
    let left = 1, right = Math.min(...ranks) * cars * cars;
    
    const canRepairInTime = (time) => {
        let totalCars = 0;
        for (let rank of ranks) {
            let n = Math.floor(Math.sqrt(time / rank));
            totalCars += n;
            if (totalCars >= cars) return true;
        }
        return totalCars >= cars;
    };
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canRepairInTime(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}

// Example usage:
console.log(minRepairTime([4,2,3,1], 10)); // Output: 16
console.log(minRepairTime([5,1,8], 6));   // Output: 16
