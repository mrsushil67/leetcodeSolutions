/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[1] - b[1]);
    
    let maxChainLength = 0;
    let end = -Infinity;

    for (let pair of pairs) {
        if (pair[0] > end) {
            maxChainLength++;
            end = pair[1];
        }
    }
    
    return maxChainLength;
};