/**
 * @param {number[][]} segments
 * @return {number[][]}
 */
var splitPainting = function(segments) {
    let events = [];
    for (let [start, end, color] of segments) {
        events.push([start, color]);
        events.push([end, -color]);
    }

    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        let mid = arr.length >> 1;
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        let i = 0, j = 0, out = [];
        while (i < left.length && j < right.length) {
            if (left[i][0] < right[j][0]) out.push(left[i++]);
            else out.push(right[j++]);
        }
        while (i < left.length) out.push(left[i++]);
        while (j < right.length) out.push(right[j++]);
        return out;
    }

    events = mergeSort(events);

    let result = [];
    let sum = 0;
    let prev = events[0][0];

    for (let [pos, val] of events) {
        if (pos !== prev && sum > 0) {
            result.push([prev, pos, sum]);
        }
        if (val > 0) sum += val;
        else sum += val;
        prev = pos;
    }

    return result;
}
