/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  const result = [];

  function matches(word, pattern) {
    const mapWord = {};
    const mapPattern = {};

    for (let i = 0; i < word.length; i++) {
      const w = word[i];
      const p = pattern[i];

      if (!mapWord[p]) mapWord[p] = w;
      if (!mapPattern[w]) mapPattern[w] = p;

      if (mapWord[p] !== w || mapPattern[w] !== p) return false;
    }

    return true;
  }

  for (let i = 0; i < words.length; i++) {
    if (matches(words[i], pattern)) {
      result[result.length] = words[i];
    }
  }

  return result;
}
