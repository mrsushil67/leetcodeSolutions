/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    const canForm = (word, wordSet) => {
        const n = word.length;
        const dp = Array(n + 1).fill(false);
        dp[0] = true;

        for (let i = 1; i <= n; i++) {
            for (let j = 0; j < i; j++) {
                if (dp[j] && wordSet.has(word.slice(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[n];
    };

    const wordSet = new Set(words);
    const result = [];

    for (let word of words) {
        if (word.length === 0) continue;
        wordSet.delete(word);

        if (canForm(word, wordSet)) {
            result.push(word);
        }

        wordSet.add(word);
    }

    return result;
};