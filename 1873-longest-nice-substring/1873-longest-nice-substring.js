/**
 * @param {string} s
 * @return {string}
 */
function longestNiceSubstring(s) {
    if (s.length < 2) return "";

    const set = new Set(s);

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (!set.has(ch.toLowerCase()) || !set.has(ch.toUpperCase())) {
            const left = longestNiceSubstring(s.slice(0, i));
            const right = longestNiceSubstring(s.slice(i + 1));
            return left.length >= right.length ? left : right;
        }
    }
    return s;
}
