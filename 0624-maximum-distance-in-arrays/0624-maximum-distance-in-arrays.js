/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    let maxDist = 0;

    let preMin = arrays[0][0];
    let preMax = arrays[0][arrays[0].length - 1];

    for (let i = 1; i < arrays.length; i++) {
        let curMin = arrays[i][0];
        let curMax = arrays[i][arrays[i].length - 1];

        let dist1 = Math.abs(curMax - preMin);
        let dist2 = Math.abs(curMin - preMax);

        maxDist = Math.max(maxDist, dist1, dist2);    

        preMin = Math.min(preMin, curMin);
        preMax = Math.max(preMax, curMax);
    }

    return maxDist;
};
