/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) return 0;

    var i, j;
    var n = coins.length;
    var dp = new Array(amount + 1);

    var INF = amount + 1;

    for (i = 0; i <= amount; i++) {
        dp[i] = INF;
    }
    dp[0] = 0;

    function min(a, b) {
        return a < b ? a : b;
    }

    for (i = 1; i <= amount; i++) {
        for (j = 0; j < n; j++) {
            var coin = coins[j];
            if (i - coin >= 0) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === INF ? -1 : dp[amount];
};
