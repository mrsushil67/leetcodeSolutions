/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    const [left, right] = equation.split("=");

    const parse = (expr) => {
        let coefX = 0, constVal = 0;
        let sign = 1;
        let num = "";
        
        for (let i = 0; i <= expr.length; i++) {
            const ch = expr[i] || '+';
            if (ch === '+' || ch === '-') {
                if (num !== "") {
                    const n = parseInt(num);
                    constVal += sign * n;
                    num = "";
                }
                sign = ch === '+' ? 1 : -1;
            } else if (ch === 'x') {
                if (num === "") num = "1";
                const n = parseInt(num);
                coefX += sign * n;
                num = "";
            } else {
                num += ch;
            }
        }

        return [coefX, constVal];
    };
    
    const [coefL, constL] = parse(left);
    const [coefR, constR] = parse(right);

    const coef = coefL - coefR;
    const constant = constR - constL;

    if (coef === 0 && constant === 0) return "Infinite solutions";
    if (coef === 0 && constant !== 0) return "No solution";

    return "x=" + (constant / coef);
}