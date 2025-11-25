/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    const max = n * n;

    const isSquare = Array(max + 1).fill(false);
    for (let i = 1; i <= n; i++) {
        isSquare[i * i] = true;
    }

    let count = 0;

    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            const sum = a * a + b * b;
            if (sum <= max && isSquare[sum]) {
                count++;
            }
        }
    }

    return count;
}
