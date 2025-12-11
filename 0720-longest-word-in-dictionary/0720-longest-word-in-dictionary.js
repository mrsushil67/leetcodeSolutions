/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort();
    let set = new Set();
    let best = "";

    for (let w of words) {
        if (w.length === 1 || set.has(w.slice(0, w.length - 1))) {
            set.add(w);
            if (w.length > best.length) best = w;
        }
    }

    return best;
}