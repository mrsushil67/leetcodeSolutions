/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    var bannedMap = {};
    for (var i = 0; i < banned.length; i++) {
        var w = banned[i];
        bannedMap[w] = true;
    }

    var freq = {};

    var word = "";
    for (var i = 0; i <= paragraph.length; i++) {
        var c = paragraph[i];

        if (c >= 'A' && c <= 'Z') {
            c = String.fromCharCode(c.charCodeAt(0) + 32);
        }

        if (c >= 'a' && c <= 'z') {
            word += c;
        } else {
            if (word.length > 0) {
                if (!bannedMap[word]) {
                    if (freq[word] === undefined) freq[word] = 0;
                    freq[word]++;
                }
            }
            word = "";
        }
    }

    var maxWord = "";
    var maxCount = 0;

    for (var key in freq) {
        if (freq[key] > maxCount) {
            maxCount = freq[key];
            maxWord = key;
        }
    }

    return maxWord;
}
