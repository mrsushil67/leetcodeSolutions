/**
 * @param {string} s
 * @return {string[]}
 */
function findRepeatedDnaSequences(s) {
    const n = s.length;
    const seen = {};
    const result = [];

    if (n < 10) return result;

    for (let i = 0; i <= n - 10; i++) {
        let seq = "";
        for (let j = i; j < i + 10; j++) {
            seq += s[j];
        }

        if (seen[seq] === undefined) {
            seen[seq] = 1;
        } else if (seen[seq] === 1) {
            result[result.length] = seq;
            seen[seq] = 2;
        } else {
            seen[seq] += 1;
        }
    }

    return result;
}