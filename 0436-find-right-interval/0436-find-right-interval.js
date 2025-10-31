/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
function findRightInterval(intervals) {
  let result = [];
  let n = intervals.length;

  for (let i = 0; i < n; i++) {
    let minIndex = -1;
    let minStart = Infinity;

    for (let j = 0; j < n; j++) {
      if (intervals[j][0] >= intervals[i][1]) {
        if (intervals[j][0] < minStart) {
          minStart = intervals[j][0];
          minIndex = j;
        }
      }
    }
    result.push(minIndex);
  }

  return result;
}