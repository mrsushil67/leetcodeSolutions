/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */

 function modPow(a, b, mod) {
    let result = 1;
    a %= mod;

    while (b > 0) {
        if (b % 2 === 1) result = (result * a) % mod;
        a = (a * a) % mod;
        b = Math.floor(b / 2);
    }
    return result;
}

var superPow = function(a, b) {
    const mod = 1337;

    function helper(i) {
        if (i < 0) return 1;

        let part1 = modPow(helper(i - 1), 10, mod);
        let part2 = modPow(a, b[i], mod);

        return (part1 * part2) % mod;
    }

    return helper(b.length - 1);
}
