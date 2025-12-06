/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var makeIntegerBeautiful = function(n, target) {
    function digitSum(x) {
        let s = 0;
        while (x > 0) {
            s += x % 10;
            x = Math.floor(x / 10);
        }
        return s;
    }

    if (digitSum(n) <= target) return 0;

    let mult = 1;
    let added = 0;

    while (digitSum(n) > target) {
        let mod = n % (mult * 10);
        let add = (mult * 10 - mod);
        n += add;
        added += add;
        mult *= 10;
    }

    return added;
};