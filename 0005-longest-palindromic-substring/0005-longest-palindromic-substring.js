/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var start = 0;
    var end = 0;

    for (var i = 0; i < s.length; i++) {
        var len1 = expandAroundCenter(s, i, i);
        var len2 = expandAroundCenter(s, i, i + 1);
        var len = len1 > len2 ? len1 : len2;

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    var result = "";
    for (var k = start; k <= end; k++) {
        result += s[k];
    }

    return result;
};

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}