/**
 * @param {string} s
 * @return {boolean}
 */
var checkPartitioning = function(s) {
    const n = s.length;
    if (n < 3) return false; // must have 3 non-empty parts

    // Step 1: Precompute palindrome table
    const isPal = Array.from({ length: n }, () => Array(n).fill(false));

    for (let len = 1; len <= n; len++) {
        for (let i = 0; i + len - 1 < n; i++) {
            const j = i + len - 1;
            if (s[i] === s[j]) {
                if (len <= 2) isPal[i][j] = true;
                else isPal[i][j] = isPal[i + 1][j - 1];
            }
        }
    }

    // Step 2: Try all pairs of cuts (i, j)
    for (let i = 1; i < n - 1; i++) {
        if (!isPal[0][i - 1]) continue;
        for (let j = i + 1; j < n; j++) {
            if (isPal[i][j - 1] && isPal[j][n - 1]) {
                return true;
            }
        }
    }

    return false;
};