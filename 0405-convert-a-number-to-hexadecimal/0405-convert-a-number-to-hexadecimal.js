/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) return "0";

    const hex = "0123456789abcdef";
    let result = "";

    num = num >>> 0;

    while (num > 0) {
        let digit = num & 15;
        result = hex[digit] + result;
        num = num >>> 4;
    }

    return result;
};
