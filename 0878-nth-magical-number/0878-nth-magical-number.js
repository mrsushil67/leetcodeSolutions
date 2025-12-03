/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function(n, a, b) {
    const MOD = 1_000_000_007;

    function gcd(x, y) {
        while (y !== 0) {
            let t = x % y;
            x = y;
            y = t;
        }
        return x;
    }

    let g = gcd(a, b);
    let lcm = a / g * b;

    let left = 1, right = n * Math.min(a, b), ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        let count = Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / lcm);

        if (count >= n) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans % MOD;
}