/**
 * @param {string} s
 * @return {number}
 */
var numWays = function(s) {
    const MOD = 1e9 + 7;
    let n = s.length;

    let ones = 0;
    for (let ch of s) if (ch === '1') ones++;

    if (ones % 3 !== 0) return 0;

    if (ones === 0) {
        let cuts = n - 1;
        return (cuts * (cuts - 1) / 2) % MOD;
    }

    let k = ones / 3;
    let positions = [];

    for (let i = 0; i < n; i++) {
        if (s[i] === '1') positions.push(i);
    }

    let gap1 = positions[k] - positions[k - 1];

    let gap2 = positions[2 * k] - positions[2 * k - 1];

    return (gap1 * gap2) % MOD;
}
