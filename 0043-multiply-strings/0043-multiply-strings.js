/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";
    
    const m = num1.length, n = num2.length;
    const result = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const sum = mul + result[i + j + 1];
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    let resultStr = '';
    for (let i = 0; i < result.length; i++) {
        if (!(resultStr === '' && result[i] === 0)) {
            resultStr += result[i];
        }
    }

    return resultStr;
}