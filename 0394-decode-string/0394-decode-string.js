/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const numStack = [];
    const strStack = [];
    let currNum = 0;
    let currStr = "";

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (ch >= '0' && ch <= '9') {
            currNum = currNum * 10 + (ch.charCodeAt(0) - '0'.charCodeAt(0)); // handle multi-digit
        } 
        else if (ch === '[') {
            numStack.push(currNum);
            strStack.push(currStr);
            currNum = 0;
            currStr = "";
        } 
        else if (ch === ']') {
            const repeatTimes = numStack.pop();
            const prevStr = strStack.pop();
            currStr = prevStr + currStr.repeat(repeatTimes);
        } 
        else {
            currStr += ch;
        }
    }

    return currStr;
};