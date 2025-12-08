/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    const week = ["Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"];
    const mdays = [31,28,31,30,31,30,31,31,30,31,30,31];

    function isLeap(y) {
        return (y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0);
    }

    let total = 0;

    for (let y = 1971; y < year; y++) {
        total += isLeap(y) ? 366 : 365;
    }

    for (let m = 1; m < month; m++) {
        total += mdays[m - 1];
        if (m === 2 && isLeap(year)) total += 1;
    }

    total += day - 1;

    return week[total % 7];
};

