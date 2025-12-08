/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function(n) {
    if (n === 0) return "0";
    let res = "";
    while (n !== 0) {
        let r = n & 1;
        res = r + res;
        n = -(n >> 1);
    }
    return res;
};

