/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let currentSubstring = "";

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (currentSubstring.includes(char)) {
            currentSubstring = currentSubstring.substring(currentSubstring.indexOf(char) + 1);
        }

        currentSubstring += char;

        maxLength = Math.max(maxLength, currentSubstring.length);
    }

    return maxLength;
};