/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const res = [];

    // Convert string segment to number manually
    function stringToInt(str) {
        let num = 0;
        for (let i = 0; i < str.length; i++) {
            num = num * 10 + (str.charCodeAt(i) - 48);
        }
        return num;
    }

    function isValid(segment) {
        if (segment.length === 0) return false;
        if (segment.length > 1 && segment[0] === '0') return false;  // Leading zero
        const num = stringToInt(segment);
        return num >= 0 && num <= 255;
    }

    function backtrack(start, path, depth) {
        if (depth === 4) {
            if (start === s.length) {
                // Manually join segments with '.'
                let ip = "";
                for (let i = 0; i < 4; i++) {
                    if (i > 0) ip += '.';
                    ip += path[i];
                }
                res.push(ip);
            }
            return;
        }

        for (let len = 1; len <= 3; len++) {
            if (start + len > s.length) break;

            let segment = "";
            for (let i = 0; i < len; i++) {
                segment += s[start + i];
            }

            if (isValid(segment)) {
                path[depth] = segment;
                backtrack(start + len, path, depth + 1);
            }
        }
    }

    if (s.length >= 4 && s.length <= 12) {
        backtrack(0, new Array(4), 0);
    }

    return res;
};
