/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    let rows = [];
    for (let i = 0; i < numRows; i++) {
        rows[i] = "";
    }

    let currentRow = 0;
    let goingDown = false;

    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s[i];

        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    let result = "";
    for (let i = 0; i < numRows; i++) {
        result += rows[i];
    }

    return result;
}
