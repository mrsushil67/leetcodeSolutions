/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
  const roots = new Set(dictionary);
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let prefix = "";

    for (let j = 1; j <= word.length; j++) {
      prefix = word.slice(0, j);
      if (roots.has(prefix)) {
        word = prefix;
        break;
      }
    }
    words[i] = word;
  }

  return words.join(" ");
}
