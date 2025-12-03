/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const [year, month, day] = date.split("-").map(Number);

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const isLeap = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
    if (isLeap) daysInMonth[1] = 29;

    let total = 0;
    for (let i = 0; i < month - 1; i++) {
        total += daysInMonth[i];
    }

    return total + day;
}
