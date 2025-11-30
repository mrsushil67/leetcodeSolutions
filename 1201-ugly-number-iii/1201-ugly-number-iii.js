/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n, a, b, c) {
    function gcd(x, y) {
        while (y !== 0) {
            let temp = x % y;
            x = y;
            y = temp;
        }
        return x;
    }

    function lcm(x, y) {
        return (x / gcd(x, y)) * y;
    }

    let ab = lcm(a, b);
    let ac = lcm(a, c);
    let bc = lcm(b, c);
    let abc = lcm(ab, c);

    function count(x) {
        return Math.floor(x / a)
             + Math.floor(x / b)
             + Math.floor(x / c)
             - Math.floor(x / ab)
             - Math.floor(x / ac)
             - Math.floor(x / bc)
             + Math.floor(x / abc);
    }

    let left = 1, right = 2 * 10**9, ans = 0;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (count(mid) >= n) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
}
