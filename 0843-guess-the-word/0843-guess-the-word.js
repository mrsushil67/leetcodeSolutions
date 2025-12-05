/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string} word
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} words
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(words, master) {
    function match(a, b) {
        let cnt = 0;
        for (let i = 0; i < 6; i++) {
            if (a[i] === b[i]) cnt++;
        }
        return cnt;
    }

    for (let g = 0; g < 30; g++) {
        let freq = Array.from({ length: 6 }, () => ({}));
        for (let w of words) {
            for (let i = 0; i < 6; i++) {
                freq[i][w[i]] = (freq[i][w[i]] || 0) + 1;
            }
        }

        let best = null;
        let bestScore = -1;

        for (let w of words) {
            let score = 0;
            for (let i = 0; i < 6; i++) {
                score += freq[i][w[i]];
            }
            if (score > bestScore) {
                bestScore = score;
                best = w;
            }
        }

        let m = master.guess(best);
        if (m === 6) return;

        let next = [];
        for (let w of words) {
            if (match(w, best) === m) next.push(w);
        }

        words = next;
    }
};