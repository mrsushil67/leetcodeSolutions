/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
function buddyStrings(s, goal) {
    if (s.length !== goal.length) return false;

    if (s === goal) {
        let seen = {};
        for (let i = 0; i < s.length; i++) {
            let ch = s[i];
            if (seen[ch]) {
                return true;
            }
            seen[ch] = true;
        }
        return false;
    }

    let diffIndices = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diffIndices.push(i);
        }
    }

    if (diffIndices.length !== 2) return false;

    let i = diffIndices[0];
    let j = diffIndices[1];

    return s[i] === goal[j] && s[j] === goal[i];
}