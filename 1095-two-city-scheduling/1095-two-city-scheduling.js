/**
 * @param {number[][]} costs
 * @return {number}
 */
function twoCitySchedCost(costs) {
    var n = costs.length / 2;

    costs.sort(function(a, b) {
        return (a[1] - a[0]) - (b[1] - b[0]);
    });

    var total = 0;
    for (var i = 0; i < costs.length; i++) {
        if (i < n) {
            total += costs[i][1]; // city B
        } else {
            total += costs[i][0]; // city A
        }
    }

    return total;
}