/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const len1 = s1.length, len2 = s2.length;
    if (len1 > len2) return false;

    const count1 = Array(26).fill(0);
    const count2 = Array(26).fill(0);

    const aCharCode = "a".charCodeAt(0);

    for (let i = 0; i < len1; i++) {
        count1[s1.charCodeAt(i) - aCharCode]++;
        count2[s2.charCodeAt(i) - aCharCode]++;
    }

    const matches = () => {
        for (let i = 0; i < 26; i++) {
            if (count1[i] !== count2[i]) return false;
        }
        return true;
    };

    if (matches()) return true;

    for (let i = len1; i < len2; i++) {
        count2[s2.charCodeAt(i) - aCharCode]++;
        count2[s2.charCodeAt(i - len1) - aCharCode]--;
        if (matches()) return true;
    }

    return false;
};
