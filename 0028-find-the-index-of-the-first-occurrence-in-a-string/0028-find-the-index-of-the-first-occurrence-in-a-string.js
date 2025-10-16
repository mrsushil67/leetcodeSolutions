/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var hLen = haystack.length;
    var nLen = needle.length;

    if (nLen === 0) return 0;

    for (var i = 0; i <= hLen - nLen; i++) {
        var found = true;
        
        for (var j = 0; j < nLen; j++) {
            if (haystack[i + j] !== needle[j]) {
                found = false;
                break;
            }
        }
        if (found) return i;
    }

    return -1;
}