/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    const n = nums.length;
    if (n < 2) return 0;
    
    let minVal = Math.min(...nums);
    let maxVal = Math.max(...nums);
    
    let bucketSize = Math.max(1, Math.floor((maxVal - minVal) / (n - 1)));
    
    let bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;
    let buckets = new Array(bucketCount).fill(null).map(() => ({
        min: Infinity,
        max: -Infinity
    }));
    
    for (let num of nums) {
        let index = Math.floor((num - minVal) / bucketSize);
        let bucket = buckets[index];
        bucket.min = Math.min(bucket.min, num);
        bucket.max = Math.max(bucket.max, num);
    }
    
    let maxGap = 0;
    let prevMax = minVal;
    for (let bucket of buckets) {
        if (bucket.min === Infinity) continue;
        maxGap = Math.max(maxGap, bucket.min - prevMax);
        prevMax = bucket.max;
    }
    
    return maxGap;
};
