/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    var ugly = new Array(n);
    var m = primes.length;
    var idx = new Array(m);
    var candidate = new Array(m);

    var i, j;

    for (i = 0; i < m; i++) {
        idx[i] = 0;
    }

    ugly[0] = 1;

    for (i = 0; i < m; i++) {
        candidate[i] = primes[i] * ugly[idx[i]];
    }

    for (i = 1; i < n; i++) {
        var minVal = candidate[0];
        for (j = 1; j < m; j++) {
            if (candidate[j] < minVal) {
                minVal = candidate[j];
            }
        }

        ugly[i] = minVal;

        for (j = 0; j < m; j++) {
            if (candidate[j] === minVal) {
                idx[j]++;
                candidate[j] = primes[j] * ugly[idx[j]];
            }
        }
    }

    return ugly[n - 1];
};
