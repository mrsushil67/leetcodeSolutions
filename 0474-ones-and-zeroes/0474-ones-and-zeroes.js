/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function findMaxForm(strs, m, n) {
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let str of strs) {
    let zeros = 0, ones = 0;
    for (let ch of str) {
      if (ch === '0') zeros++;
      else ones++;
    }

    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], 1 + dp[i - zeros][j - ones]);
      }
    }
  }

  return dp[m][n];
}