/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    if (dividend === INT_MIN && divisor === -1) return INT_MAX;

    const negative = (dividend < 0) !== (divisor < 0);

    let a = BigInt(Math.abs(dividend));
    let b = BigInt(Math.abs(divisor));
    let result = 0n;

    for (let i = 31n; i >= 0n; i--) {
        if (a >= (b << i)) {
            a -= b << i;
            result += 1n << i;
        }
    }
    if (negative) result = -result;

    if (result > BigInt(INT_MAX)) return INT_MAX;
    if (result < BigInt(INT_MIN)) return INT_MIN;

    return Number(result);
}


