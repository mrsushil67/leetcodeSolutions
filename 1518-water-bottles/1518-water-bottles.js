/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let full = numBottles;
    let empty = 0;
    let drank = 0;

    while (full > 0) {
        drank += full;
        empty += full;
        full = 0;

        if (empty >= numExchange) {
            full = Math.floor(empty / numExchange);
            empty = empty % numExchange;
        }
    }

    return drank;
}
