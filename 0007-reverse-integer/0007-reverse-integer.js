/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var INT_MAX = 2147483647;
    var INT_MIN = -2147483648;
    var rev = 0;

    while (x !== 0) {
        var pop = x % 10;

        if (x < 0 && pop > 0) {
            pop - 10;
        }

        x = (x - pop) / 10;

        if (rev > INT_MAX / 10 || (rev === INT_MAX / 10 && pop > 7)) return 0;
        if (rev < INT_MIN / 10 || (rev === INT_MIN / 10 && pop < -8)) return 0;

        rev = rev * 10 + pop;
    }

    return rev;
}