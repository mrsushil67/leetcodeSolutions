/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function(n) {
    let memo = {1: [1]};

    function build(m) {
        if (memo[m]) return memo[m];

        let odds = build(Math.ceil(m / 2));
        let evens = build(Math.floor(m / 2));

        let res = [];

        for (let x of odds) res.push(2 * x - 1);

        for (let x of evens) res.push(2 * x);

        return memo[m] = res;
    }

    return build(n);
}