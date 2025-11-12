/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    const n = num.length;

    const isValid = (s) => s.length === 1 || s[0] !== '0';

    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let num1 = num.slice(0, i);
            let num2 = num.slice(i, j);

            if (!isValid(num1) || !isValid(num2)) continue;

            let a = BigInt(num1);
            let b = BigInt(num2);
            let k = j;

            while (k < n) {
                let sum = a + b;
                let sumStr = sum.toString();

                if (!num.startsWith(sumStr, k)) break;

                k += sumStr.length;
                a = b;
                b = sum;
            }

            if (k === n) return true;
        }
    }

    return false;
}