/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    let map = new Map();
    for (let a of answers) {
        map.set(a, (map.get(a) || 0) + 1);
    }
    let total = 0;
    for (let [x, f] of map.entries()) {
        let groupSize = x + 1;
        let groups = Math.ceil(f / groupSize);
        total += groups * groupSize;
    }
    return total;
};
