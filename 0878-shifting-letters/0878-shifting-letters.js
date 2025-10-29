/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
function shiftingLetters(s, shifts) {
    const n = s.length;
    const chars = s.split('');
    let total = 0;

    for (let i = n - 1; i >= 0; i--) {
        total = (total + shifts[i]) % 26;
        const code = s.charCodeAt(i) - 97;
        const shifted = (code + total) % 26;
        chars[i] = String.fromCharCode(shifted + 97);
    }

    return chars.join('');
}