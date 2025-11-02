/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const col = coordinates.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    const row = coordinates.charCodeAt(1) - '0'.charCodeAt(0);
    return (col + row) % 2 === 1;
};