/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let year = 0, month = 0, day = 0;

    for (let i = 0; i < 4; i++) {
        year = year * 10 + (date.charCodeAt(i) - 48);
    }

    for (let i = 5; i < 7; i++) {
        month = month * 10 + (date.charCodeAt(i) - 48);
    }

    for (let i = 8; i < 10; i++) {
        day = day * 10 + (date.charCodeAt(i) - 48);
    }

    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    if (isLeap) {
        days[1] = 29;
    }

    let total = 0;
    for (let i = 0; i < month - 1; i++) {
        total += days[i];
    }

    total += day;

    return total;
}
