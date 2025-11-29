/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function(p, q) {
    function gcd(a, b) {
        while (b !== 0) {
            let t = a % b;
            a = b;
            b = t;
        }
        return a;
    }

    let g = gcd(p, q);
    let l = (p / g) * q;

    let m = l / p;
    let n = l / q;

    if (m % 2 === 0) return 0;
    if (n % 2 === 0) return 2;
    return 1;
}

