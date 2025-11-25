/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfFlooredPairs = function(nums) {
    const MOD = 1_000_000_007n;

    let maxVal = 0;
    for (let x of nums) if (x > maxVal) maxVal = x;

    const freq = Array(maxVal + 1).fill(0);
    for (let x of nums) freq[x]++;

    const prefix = Array(maxVal + 1).fill(0);
    prefix[0] = freq[0];
    for (let i = 1; i <= maxVal; i++) prefix[i] = prefix[i - 1] + freq[i];

    const countInRange = (l, r) => {
        if (l > r || l > maxVal) return 0;
        if (r > maxVal) r = maxVal;
        return prefix[r] - (l > 0 ? prefix[l - 1] : 0);
    };

    let result = 0n;

    for (let b = 1; b <= maxVal; b++) {
        if (freq[b] === 0) continue;
        const freqB = BigInt(freq[b]);

        for (let q = 0; q * b <= maxVal; q++) {
            const L = q * b;
            const R = L + b - 1;
            const cnt = countInRange(L, R);
            if (cnt === 0) continue;

            result =
                (result +
                    BigInt(q) * BigInt(cnt) % MOD * freqB % MOD) % MOD;
        }
    }

    return Number(result);
}

