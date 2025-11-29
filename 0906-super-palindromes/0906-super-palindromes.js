/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */

function superpalindromesInRange(left, right) {
    let L = BigInt(left), R = BigInt(right);
    let ans = 0;

    function isPal(x) {
        x = x.toString();
        let i = 0, j = x.length - 1;
        while (i < j) {
            if (x[i] !== x[j]) return false;
            i++; j--;
        }
        return true;
    }

    for (let k = 1; k < 100000; k++) {
        let s = String(k);
        let rs = s.split("").reverse().join("");
        let even = s + rs;
        let y = BigInt(even);
        let x = y * y;
        if (x > R) break;
        if (x >= L && isPal(x)) ans++;
    }

    for (let k = 1; k < 100000; k++) {
        let s = String(k);
        let rs = s.split("").reverse().join("");
        let odd = s + rs.slice(1);
        let y = BigInt(odd);
        let x = y * y;
        if (x > R) break;
        if (x >= L && isPal(x)) ans++;
    }

    return ans;
}
