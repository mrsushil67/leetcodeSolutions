/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function(password) {
    const n = password.length;
    let hasLower = false, hasUpper = false, hasDigit = false;

    for (let ch of password) {
        if (ch >= 'a' && ch <= 'z') hasLower = true;
        else if (ch >= 'A' && ch <= 'Z') hasUpper = true;
        else if (ch >= '0' && ch <= '9') hasDigit = true;
    }

    const missingTypes = 3 - (hasLower + hasUpper + hasDigit);

    let repeats = [];
    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && password[j] === password[i]) j++;
        const len = j - i;
        if (len >= 3) repeats.push(len);
        i = j;
    }

    if (n < 6) {
        return Math.max(missingTypes, 6 - n);
    }

    let overLen = Math.max(0, n - 20);
    let toDelete = overLen;
    let replacements = 0;

    repeats.sort((a, b) => (a % 3) - (b % 3));

    for (let k = 0; k < repeats.length && toDelete > 0; k++) {
        const len = repeats[k];
        const mod = len % 3;
        const del = Math.min(toDelete, mod + 1);
        repeats[k] -= del;
        toDelete -= del;
    }

    for (let k = 0; k < repeats.length && toDelete > 0; k++) {
        if (repeats[k] >= 3) {
            const del = Math.min(toDelete, repeats[k] - 2);
            repeats[k] -= del;
            toDelete -= del;
        }
    }

    for (let len of repeats) {
        if (len >= 3) replacements += Math.floor(len / 3);
    }

    if (n <= 20) {
        return Math.max(missingTypes, replacements);
    } else {
        return overLen + Math.max(missingTypes, replacements);
    }
};



