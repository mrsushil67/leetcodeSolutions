/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const rows = [
        new Set("qwertyuiop"),
        new Set("asdfghjkl"),
        new Set("zxcvbnm")
    ];

    const result = [];

    for (const word of words) {
        const lower = word.toLowerCase();
        for (const row of rows) {
            if ([...lower].every(ch => row.has(ch))) {
                result.push(word);
                break;
            }
        }
    }

    return result;
};