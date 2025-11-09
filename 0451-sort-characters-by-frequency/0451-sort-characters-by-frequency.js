/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freq = new Map();
    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    const sortedChars = [...freq.keys()].sort((a, b) => freq.get(b) - freq.get(a));

    let result = '';
    for (const char of sortedChars) {
        result += char.repeat(freq.get(char));
    }

    return result;
}