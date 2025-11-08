/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const count = {};

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (count[ch] === undefined) count[ch] = 1;
        else count[ch]++;
    }

    for (let i = 0; i < t.length; i++) {
        const ch = t[i];
        if (count[ch] === undefined) return false;
        count[ch]--;
        if (count[ch] < 0) return false;
    }

    return true;
}