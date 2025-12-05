/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
    const n = num.length / 2;
    let sum1 = 0, sum2 = 0;
    let q1 = 0, q2 = 0;

    for (let i = 0; i < n; i++) {
        if (num[i] === '?') q1++;
        else sum1 += +num[i];
    }

    for (let i = n; i < 2*n; i++) {
        if (num[i] === '?') q2++;
        else sum2 += +num[i];
    }

    const diff = sum1 - sum2;
    const qdiff = q1 - q2;

    return diff * 2 !== -9 * qdiff;
};