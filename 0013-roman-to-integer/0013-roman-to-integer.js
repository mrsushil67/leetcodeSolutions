/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let i = 0;

    while (i < s.length) {
        let current = values[s[i]];
        let next = 0;

        if (i + 1 < s.length) {
            next = values[s[i + 1]];
        }

        if (current < next) {
            total += (next - current);
            i += 2;
        } else {
            total += current;
            i += 1;
        }
    }

    return total;
};
