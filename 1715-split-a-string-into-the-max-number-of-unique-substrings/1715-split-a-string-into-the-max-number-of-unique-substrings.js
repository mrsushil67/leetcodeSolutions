/**
 * @param {string} s
 * @return {number}
 */
function maxUniqueSplit(s) {
    function getSubstring(str, from, to) {
        let result = "";
        for (let i = from; i < to; i++) {
            result += str[i];
        }
        return result;
    }

    function dfs(start, used) {
        if (start === s.length) {
            return used.length;
        }

        let maxCount = 0;

        for (let end = start + 1; end <= s.length; end++) {
            const sub = getSubstring(s, start, end);

            let found = false;
            for (let i = 0; i < used.length; i++) {
                if (used[i] === sub) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                used.push(sub);
                const count = dfs(end, used);
                if (count > maxCount) maxCount = count;
                used.pop();
            }
        }

        return maxCount;
    }

    return dfs(0, []);
}
