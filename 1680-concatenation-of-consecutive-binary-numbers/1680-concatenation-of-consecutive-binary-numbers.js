/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    const MOD = 1000000007n;

    let ans = 0n;
    let bits = 0n;

    for (let i = 1; i <= n; i++) {
        if ((i & (i - 1)) === 0) bits++;

        ans = ((ans << bits) + BigInt(i)) % MOD;
    }

    return Number(ans);
};