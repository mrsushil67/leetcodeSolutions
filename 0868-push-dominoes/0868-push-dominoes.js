/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    var arr = dominoes.split("");
    var n = arr.length;

    var forces = [];

    for (var i = 0; i < n; i++) {
        if (arr[i] === 'L' || arr[i] === 'R') {
            forces.push(i);
        }
    }

    forces.unshift(-1); 
    forces.push(n);

    for (var i = 0; i < forces.length - 1; i++) {
        var left = forces[i];
        var right = forces[i+1];

        var leftChar = (left == -1 ? 'L' : arr[left]);
        var rightChar = (right == n ? 'R' : arr[right]);

        if (leftChar === rightChar) {
            for (var j = left + 1; j < right; j++) {
                arr[j] = leftChar;
            }
        } else if (leftChar === 'R' && rightChar === 'L') {
            var l = left + 1;
            var r = right - 1;
            while (l < r) {
                arr[l++] = 'R';
                arr[r--] = 'L';
            }

        }
        
    }

    return arr.join("");
}
