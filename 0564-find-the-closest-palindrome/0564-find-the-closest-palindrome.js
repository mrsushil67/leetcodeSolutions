/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
    const len = n.length;
    const num = BigInt(n);

    if (n === "1") return "0";

    const candidates = new Set();

    candidates.add("9".repeat(len - 1));
    candidates.add("1" + "0".repeat(len - 1) + "1");

    const prefix = BigInt(n.slice(0, Math.ceil(len / 2)));

    for (let delta of [-1n, 0n, 1n]) {
        const newPrefix = (prefix + delta).toString();
        let palindrome;
        if (len % 2 === 0) {
            palindrome = newPrefix + newPrefix.split("").reverse().join("");
        } else {
            palindrome = newPrefix + newPrefix.slice(0, -1).split("").reverse().join("");
        }
        candidates.add(palindrome);
    }

    candidates.delete(n);

    let best = null;
    for (let cand of candidates) {
        if (cand === "") continue;
        const candNum = BigInt(cand);
        const diff = candNum > num ? candNum - num : num - candNum;

        if (best === null) {
            best = cand;
        } else {
            const bestNum = BigInt(best);
            const bestDiff = bestNum > num ? bestNum - num : num - bestNum;

            if (diff < bestDiff || (diff === bestDiff && candNum < bestNum)) {
                best = cand;
            }
        }
    }

    return best;
};
