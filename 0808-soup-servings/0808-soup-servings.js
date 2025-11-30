/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    if (n >= 4800) return 1;

    let N = Math.ceil(n / 25);

    let memo = {};

    function dp(a, b) {
        let key = a + ',' + b;
        if (memo[key] !== undefined) return memo[key];

        if (a <= 0 && b <= 0) return 0.5;
        if (a <= 0) return 1;
        if (b <= 0) return 0;

        let result =
            0.25 * dp(a - 4, b) +
            0.25 * dp(a - 3, b - 1) +
            0.25 * dp(a - 2, b - 2) +
            0.25 * dp(a - 1, b - 3);

        memo[key] = result;
        return result;
    }

    return dp(N, N);
}