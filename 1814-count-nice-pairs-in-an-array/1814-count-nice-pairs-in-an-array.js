/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    const MOD = 1_000_000_007n;

    function rev(x) {
        let r = 0;
        while (x > 0) {
            r = r * 10 + (x % 10);
            x = Math.floor(x / 10);
        }
        return r;
    }

    let map = new Map();
    let ans = 0n;

    for (let x of nums) {
        let k = x - rev(x);

        if (map.has(k)) {
            ans += BigInt(map.get(k));
            map.set(k, map.get(k) + 1);
        } else {
            map.set(k, 1);
        }
    }

    return Number(ans % MOD);
}
