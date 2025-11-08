/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    const result = new Set();

    let lrem = 0, rrem = 0;
    for (let ch of s) {
        if (ch === '(') {
            lrem++;
        } else if (ch === ')') {
            if (lrem > 0) lrem--;
            else rrem++;
        }
    }

    function backtrack(index, leftCount, rightCount, lrem, rrem, path) {
        if (index === s.length) {
            if (lrem === 0 && rrem === 0 && leftCount === rightCount) {
                result.add(path);
            }
            return;
        }

        const ch = s[index];

        if (ch === '(' && lrem > 0) {
            backtrack(index + 1, leftCount, rightCount, lrem - 1, rrem, path);
        }

        if (ch === ')' && rrem > 0) {
            backtrack(index + 1, leftCount, rightCount, lrem, rrem - 1, path);
        }

        if (ch !== '(' && ch !== ')') {
            backtrack(index + 1, leftCount, rightCount, lrem, rrem, path + ch);
        } else if (ch === '(') {
            backtrack(index + 1, leftCount + 1, rightCount, lrem, rrem, path + ch);
        } else if (ch === ')' && rightCount < leftCount) {
            backtrack(index + 1, leftCount, rightCount + 1, lrem, rrem, path + ch);
        }
    }

    backtrack(0, 0, 0, lrem, rrem, "");
    return Array.from(result);
}