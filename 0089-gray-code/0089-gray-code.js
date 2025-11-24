/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let size = 1 << n;
    let result = new Array(size);

    for (let i = 0; i < size; i++) {
        result[i] = i ^ (i >> 1);
    }

    return result;
}