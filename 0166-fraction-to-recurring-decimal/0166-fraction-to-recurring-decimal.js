/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) {
        return "0";
    }

    let result = "";

    const isNegative = (numerator < 0) !== (denominator < 0);
    if (isNegative) {
        result += "-";
    }

    let absNumerator = Math.abs(numerator);
    let absDenominator = Math.abs(denominator);

    result += Math.floor(absNumerator / absDenominator);

    let remainder = absNumerator % absDenominator;
    if (remainder === 0) {
        return result;
    }

    result += ".";

    const remainderMap = new Map();

    while (remainder !== 0) {
        if (remainderMap.has(remainder)) {
            const index = remainderMap.get(remainder);
            return result.substring(0, index) + "(" + result.substring(index) + ")";
        }

        remainderMap.set(remainder, result.length);

        remainder *= 10;
        result += Math.floor(remainder / absDenominator);
        
        remainder %= absDenominator;
    }

    return result;
};
