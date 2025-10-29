/**
 * @param {number[]} stones
 * @return {boolean}
 */
function canCross(stones) {
    const stoneSet = new Set(stones);
    const lastStone = stones[stones.length - 1];
    const memo = new Map();

    function dfs(position, jump) {
        const key = `${position},${jump}`;
        if (memo.has(key)) return memo.get(key);

        if (position === lastStone) return true;

        for (let nextJump = jump - 1; nextJump <= jump + 1; nextJump++) {
            if (nextJump > 0) {
                const nextPos = position + nextJump;
                if (stoneSet.has(nextPos) && dfs(nextPos, nextJump)) {
                    memo.set(key, true);
                    return true;
                }
            }
        }

        memo.set(key, false);
        return false;
    }

    if (!stoneSet.has(1)) return false;

    return dfs(1, 1);
}