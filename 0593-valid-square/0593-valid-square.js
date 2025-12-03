/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    function dist2(a, b) {
        let dx = a[0] - b[0];
        let dy = a[1] - b[1];
        return dx * dx + dy * dy;
    }

    let d = [
        dist2(p1, p2),
        dist2(p1, p3),
        dist2(p1, p4),
        dist2(p2, p3),
        dist2(p2, p4),
        dist2(p3, p4)
    ];

    d.sort((a, b) => a - b);

    if (d[0] === 0) return false;
    if (!(d[0] === d[1] && d[1] === d[2] && d[2] === d[3])) return false;

    if (d[4] !== d[5]) return false;

    return true;
}
