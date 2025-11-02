/**
 * @param {string} number
 * @return {string}
 */
function reformatNumber(number) {
    let digits = "";
    for (let i = 0; i < number.length; i++) {
        let ch = number[i];
        if (ch >= '0' && ch <= '9') {
            digits += ch;
        }
    }

    let groups = [];
    let i = 0;
    while (i < digits.length) {
        let remain = digits.length - i;

        if (remain > 4) {
            let block = "";
            for (let j = 0; j < 3; j++) block += digits[i + j];
            groups.push(block);
            i += 3;
        } 
        else if (remain === 4) {
            let block1 = "";
            let block2 = "";
            block1 += digits[i];
            block1 += digits[i + 1];
            block2 += digits[i + 2];
            block2 += digits[i + 3];
            groups.push(block1);
            groups.push(block2);
            break;
        } 
        else if (remain === 3) {
            let block = "";
            for (let j = 0; j < 3; j++) block += digits[i + j];
            groups.push(block);
            break;
        } 
        else if (remain === 2) {
            let block = "";
            block += digits[i];
            block += digits[i + 1];
            groups.push(block);
            break;
        }
    }

    let result = "";
    for (let k = 0; k < groups.length; k++) {
        result += groups[k];
        if (k !== groups.length - 1) {
            result += "-";
        }
    }

    return result;
}