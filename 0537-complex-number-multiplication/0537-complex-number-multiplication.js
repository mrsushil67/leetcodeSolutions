/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
    function parseComplex(num) {
        const [real, imaginary] = num.slice(0, -1).split('+');
        return [parseInt(real), parseInt(imaginary)];
    }
    
    const [a, b] = parseComplex(num1);
    const [c, d] = parseComplex(num2);

    const realPart = a * c - b * d;
    const imaginaryPart = a * d + b * c;
    
    return `${realPart}+${imaginaryPart}i`;
}