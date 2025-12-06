/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function(num) {
    function rev(x) {
        return Number(x.toString().split('').reverse().join(''));
    }
    
    for (let x = 0; x <= num; x++) {
        if (x + rev(x) === num) return true;
    }
    return false;
};