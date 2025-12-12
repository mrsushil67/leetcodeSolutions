/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    for (let i = 0; i < intervals.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < intervals.length; j++) {
            if (intervals[j][0] < intervals[minIndex][0] || 
               (intervals[j][0] === intervals[minIndex][0] && intervals[j][1] > intervals[minIndex][1])) {
                minIndex = j;
            }
        }
        let t = intervals[i];
        intervals[i] = intervals[minIndex];
        intervals[minIndex] = t;
    }

    let count = 1;
    let left = intervals[0][0];
    let right = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        let l = intervals[i][0];
        let r = intervals[i][1];
        if (l >= left && r <= right) continue;
        count++;
        left = l;
        right = r;
    }

    return count;
}
