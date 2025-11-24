/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = "";

    while (columnNumber > 0) {
        columnNumber--;
        let charCode = (columnNumber % 26) + 65;
        result = String.fromCharCode(charCode) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return result;
}

