/**
 * @param {string} s
 * @return {number[]}
 */
function diStringMatch(s) {
    let n = s.length;
    let low = 0;
    let high = n;
    let result = new Array(n + 1);

    for (let i = 0; i < n; i++) {
        if (s[i] === 'I') {
            result[i] = low;
            low++;
        } else { // 'D'
            result[i] = high;
            high--;
        }
    }

    result[n] = low;

    return result;
}