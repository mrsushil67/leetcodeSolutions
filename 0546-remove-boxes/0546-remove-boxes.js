/**
 * @param {number[]} boxes
 * @return {number}
 */
function removeBoxes(boxes) {
    const n = boxes.length;
    const memo = new Map();

    function dp(l, r, k) {
        if (l > r) return 0;
        const key = `${l},${r},${k}`;
        if (memo.has(key)) return memo.get(key);

        while (l < r && boxes[r] === boxes[r - 1]) {
            r--;
            k++;
        }

        let res = dp(l, r - 1, 0) + (k + 1) * (k + 1);

        for (let i = l; i < r; i++) {
            if (boxes[i] === boxes[r]) {
                res = Math.max(
                    res,
                    dp(l, i, k + 1) + dp(i + 1, r - 1, 0)
                );
            }
        }

        memo.set(key, res);
        return res;
    }

    return dp(0, n - 1, 0);
}