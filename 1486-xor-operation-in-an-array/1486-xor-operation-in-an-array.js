/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        let num = start + 2 * i;
        result ^= num;
    }
    return result;
}