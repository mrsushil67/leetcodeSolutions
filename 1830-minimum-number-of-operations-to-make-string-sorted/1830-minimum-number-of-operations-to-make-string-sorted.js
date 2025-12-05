/**
 * @param {string} s
 * @return {number}
 */
var makeStringSorted = function(s) {
    const MOD = 1000000007n;
    const n = s.length;

    const fact = Array(n + 1).fill(0n);
    const invfact = Array(n + 1).fill(0n);

    fact[0] = 1n;
    for (let i = 1; i <= n; i++) fact[i] = fact[i - 1] * BigInt(i) % MOD;

    function modPow(a, e) {
        let r = 1n, x = a % MOD;
        while (e > 0) {
            if (e & 1n) r = r * x % MOD;
            x = x * x % MOD;
            e >>= 1n;
        }
        return r;
    }
    invfact[n] = modPow(fact[n], MOD - 2n);
    for (let i = n; i > 0; i--) {
        invfact[i - 1] = invfact[i] * BigInt(i) % MOD;
    }

    const freq = Array(26).fill(0);
    for (let ch of s) freq[ch.charCodeAt(0) - 97]++;

    let result = 0n;
    let remaining = n;

    for (let i = 0; i < n; i++) {
        const c = s.charCodeAt(i) - 97;

        for (let smaller = 0; smaller < c; smaller++) {
            if (freq[smaller] === 0) continue;

            freq[smaller]--;

            let perms = fact[remaining - 1];
            for (let k = 0; k < 26; k++) {
                perms = perms * invfact[freq[k]] % MOD;
            }

            result = (result + perms) % MOD;

            freq[smaller]++;
        }

        freq[c]--;
        remaining--;
    }

    return Number(result);
};