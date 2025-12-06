/**
 * @param {string} s
 * @return {number}
 */
var countAnagrams = function(s) {
    const MOD = 1000000007n;

    const words = s.split(" ");
    let maxLen = 0;
    for (const w of words) maxLen = Math.max(maxLen, w.length);

    const fact = Array(maxLen + 1).fill(0n);
    const invFact = Array(maxLen + 1).fill(0n);

    fact[0] = 1n;
    for (let i = 1; i <= maxLen; i++) {
        fact[i] = fact[i - 1] * BigInt(i) % MOD;
    }

    const modPow = (base, exp) => {
        let b = base % MOD;
        let e = exp;
        let res = 1n;
        while (e > 0) {
            if (e & 1n) res = (res * b) % MOD;
            b = (b * b) % MOD;
            e >>= 1n;
        }
        return res;
    };

    invFact[maxLen] = modPow(fact[maxLen], MOD - 2n);
    for (let i = maxLen - 1; i >= 0; i--) {
        invFact[i] = invFact[i + 1] * BigInt(i + 1) % MOD;
    }

    let result = 1n;

    for (const word of words) {
        const freq = {};
        for (const ch of word) freq[ch] = (freq[ch] || 0) + 1;

        let ways = fact[word.length];
        for (const f of Object.values(freq)) {
            ways = ways * invFact[f] % MOD;
        }

        result = result * ways % MOD;
    }

    return Number(result % MOD);
};