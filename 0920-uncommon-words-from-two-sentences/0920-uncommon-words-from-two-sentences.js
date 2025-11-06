/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
function uncommonFromSentences(s1, s2) {
    function splitWords(sentence) {
        let words = [];
        let word = "";
        for (let i = 0; i < sentence.length; i++) {
            let ch = sentence[i];
            if (ch === " ") {
                if (word.length > 0) {
                    words.push(word);
                    word = "";
                }
            } else {
                word += ch;
            }
        }
        if (word.length > 0) words.push(word);
        return words;
    }

    let words1 = splitWords(s1);
    let words2 = splitWords(s2);

    let count = {};

    for (let i = 0; i < words1.length; i++) {
        let w = words1[i];
        count[w] = (count[w] || 0) + 1;
    }

    for (let i = 0; i < words2.length; i++) {
        let w = words2[i];
        count[w] = (count[w] || 0) + 1;
    }

    let result = [];
    for (let key in count) {
        if (count[key] === 1) {
            result.push(key);
        }
    }

    return result;
}
