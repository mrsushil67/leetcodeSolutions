/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for (let a = 0; a * a <= c; a++) {
        let bSquared = c - a * a;
        let b = Math.sqrt(bSquared);
        if (b === Math.floor(b)) {
            return true;
        }
    }
    return false;
}