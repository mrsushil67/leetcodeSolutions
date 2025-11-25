/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let winner = 1; // J(1, k)

    for (let i = 2; i <= n; i++) {
        winner = (winner + k - 1) % i + 1;
    }

    return winner;
}
