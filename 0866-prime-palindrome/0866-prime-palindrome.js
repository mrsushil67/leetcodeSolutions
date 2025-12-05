/**
 * @param {number} n
 * @return {number}
 */
var primePalindrome = function(n) {
    if (n <= 2) return 2;
    if (n <= 3) return 3;
    if (n <= 5) return 5;
    if (n <= 7) return 7;
    if (n <= 11) return 11;

    function isPrime(x) {
        if (x < 2) return false;
        if (x % 2 === 0) return x === 2;
        let r = Math.floor(Math.sqrt(x));
        for (let i = 3; i <= r; i += 2) {
            if (x % i === 0) return false;
        }
        return true;
    }

    function makePalindrome(x) {
        let s = "" + x;
        let rev = s.split("").reverse().join("").slice(1);
        return parseInt(s + rev);
    }

    for (let len = 1; len <= 100000; ++len) {
        let p = makePalindrome(len);
        if (p >= n && isPrime(p)) return p;
    }

    return -1;
};