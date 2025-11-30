/**
 * @param {number[][]} darts
 * @param {number} r
 * @return {number}
 */
var numPoints = function(darts, r) {
    let n = darts.length;
    if (n === 1) return 1;

    function dist(a, b) {
        let dx = a[0] - b[0];
        let dy = a[1] - b[1];
        return Math.sqrt(dx * dx + dy * dy);
    }

    let best = 1;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let A = darts[i], B = darts[j];
            let d = dist(A, B);

            if (d > 2 * r) continue;

            let mx = (A[0] + B[0]) / 2;
            let my = (A[1] + B[1]) / 2;

            let h = Math.sqrt(r * r - (d / 2) * (d / 2));

            let dx = (B[0] - A[0]) / d;
            let dy = (B[1] - A[1]) / d;

            let c1 = [mx + h * (-dy), my + h * dx];
            let c2 = [mx - h * (-dy), my - h * dx];

            best = Math.max(best, countInside(c1), countInside(c2));
        }
    }

    return best;

    function countInside(center) {
        let count = 0;
        for (let k = 0; k < n; k++) {
            if (dist(center, darts[k]) <= r + 1e-7)
                count++;
        }
        return count;
    }
}
