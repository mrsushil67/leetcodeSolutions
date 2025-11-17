/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
    if (k === 1) {
        var best = s;
        for (var i = 1; i < s.length; i++) {
            var rotated = s.slice(i) + s.slice(0, i);
            if (rotated < best) best = rotated;
        }
        return best;
    } 
    
    return s.split("").sort().join("");
}
