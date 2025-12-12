/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let count = {};
    for (let i = 0; i < arr1.length; i++) {
        let n = arr1[i];
        if (count[n] === undefined) count[n] = 0;
        count[n]++;
    }

    let result = [];

    for (let i = 0; i < arr2.length; i++) {
        let n = arr2[i];
        while (count[n] > 0) {
            result.push(n);
            count[n]--;
        }
    }

    let remaining = [];
    for (let key in count) {
        while (count[key] > 0) {
            remaining.push(Number(key));
            count[key]--;
        }
    }

    for (let i = 0; i < remaining.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < remaining.length; j++) {
            if (remaining[j] < remaining[minIndex]) {
                minIndex = j;
            }
        }
        let temp = remaining[i];
        remaining[i] = remaining[minIndex];
        remaining[minIndex] = temp;
    }

    for (let i = 0; i < remaining.length; i++) {
        result.push(remaining[i]);
    }

    return result;
}
