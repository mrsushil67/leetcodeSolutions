/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    var lookup = {};
    for (var i = 0; i < jewels.length; i++) {
        lookup[jewels[i]] = true;
    }

    var count = 0;
    for (var j = 0; j < stones.length; j++) {
        if (lookup[stones[j]] === true) {
            count++;
        }
    }

    return count;
}
