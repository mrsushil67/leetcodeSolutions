/**
 * @param {number[]} arr
 * @return {number[][]}
 */
function minimumAbsDifference(arr) {
    function mergeSort(a) {
        if (a.length <= 1) return a;

        let mid = a.length >> 1;
        let left = mergeSort(a.slice(0, mid));
        let right = mergeSort(a.slice(mid));

        let i = 0, j = 0, out = [];
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) out.push(left[i++]);
            else out.push(right[j++]);
        }
        while (i < left.length) out.push(left[i++]);
        while (j < right.length) out.push(right[j++]);
        return out;
    }

    arr = mergeSort(arr);

    let min = Infinity;
    for (let i = 1; i < arr.length; i++) {
        let d = arr[i] - arr[i - 1];
        if (d < min) min = d;
    }

    let res = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] === min) {
            res.push([arr[i - 1], arr[i]]);
        }
    }

    return res;
}

