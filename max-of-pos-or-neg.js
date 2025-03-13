
let nums = [-2,-1,-1,1,2,3]


function maximumCount(nums) {
    let negCount = 0, posCount = 0;

 
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]; 

    if (num < 0) {
        negCount++;
    } else if (num > 0) {
        posCount++;
    }
}
return Math.max(negCount, posCount);
}
console.log(maximumCount(nums));
