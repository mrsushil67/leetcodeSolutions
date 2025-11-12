/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
    if (n1 === 0) return 0;

    let count1 = 0;
    let count2 = 0;
    let p2 = 0;

    const recall = new Map();

    while (count1 < n1) {
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] === s2[p2]) {
                p2++;
                if (p2 === s2.length) {
                    p2 = 0;
                    count2++;
                }
            }
        }

        count1++;

        if (recall.has(p2)) {
            const [preCount1, preCount2] = recall.get(p2);
            const loopCount1 = count1 - preCount1;
            const loopCount2 = count2 - preCount2;

            const remaining = n1 - count1;
            const loops = Math.floor(remaining / loopCount1);

            count1 += loops * loopCount1;
            count2 += loops * loopCount2;
        } else {
            recall.set(p2, [count1, count2]);
        }
    }

    return Math.floor(count2 / n2);
}