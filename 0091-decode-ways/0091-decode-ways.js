/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let n = s.length;
    if (n === 0 || s[0] === '0') return 0;

    let dp = new Array(n + 1);
    for (let i = 0; i <= n; i++) dp[i] = 0;

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        let one = s[i - 1];
        let two = s[i - 2] + s[i - 1];

        if (one >= '1' && one <= '9') dp[i] += dp[i - 1];
        if (two >= '10' && two <= '26') dp[i] += dp[i - 2];
    }

    return dp[n];
}