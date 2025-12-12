/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a, b) => b - a);

    let prefix = 0;
    let total = 0;

    for (let i = 0; i < satisfaction.length; i++) {
        prefix += satisfaction[i];
        if (prefix < 0) break;
        total += prefix;
    }

    return total;
}
