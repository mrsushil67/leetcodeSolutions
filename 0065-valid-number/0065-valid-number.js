/**
 * @param {string} s
 * @return {boolean}
 */
function isNumber(s) {
    s = s.trim();
    if (s.length === 0) return false;

    let seenDigit = false;
    let seenDot = false;
    let seenExp = false;

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (ch >= '0' && ch <= '9') {
            seenDigit = true;
        } 
        else if (ch === '+' || ch === '-') {
            if (i > 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') {
                return false;
            }
        } 
        else if (ch === '.') {
            if (seenDot || seenExp) return false;
            seenDot = true;
        } 
        else if (ch === 'e' || ch === 'E') {
            if (seenExp || !seenDigit) return false;
            seenExp = true;
            seenDigit = false;
        } 
        else {
            return false;
        }
    }

    return seenDigit;
}
