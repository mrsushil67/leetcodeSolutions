/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
function maxRepeating(sequence, word) {
    let k = 0;
    let repeated = word;

    while (sequence.includes(repeated)) {
        k++;
        repeated += word;
    }

    return k;
}