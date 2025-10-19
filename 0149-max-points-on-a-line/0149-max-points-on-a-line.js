/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length <= 2) return points.length;
    let maxPointsOnLine = 0;

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    for (let i = 0; i < points.length; i++) {
        let slopeCount = new Map();
        let duplicates = 1;

        for (let j = i + 1; j < points.length; j++) {
            if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
                duplicates++;
                continue;
            }

            let dx = points[j][0] - points[i][0];
            let dy = points[j][1] - points[i][1];

            let gcdVal = gcd(dy, dx);
            dx /= gcdVal;
            dy /= gcdVal;

            if (dx < 0) {
                dx = -dx;
                dy = -dy;
            } else if (dx === 0) {
                dy = Math.abs(dy);
            }

            let slope = `${dy},${dx}`;
            slopeCount.set(slope, (slopeCount.get(slope) || 0) + 1);
        }

        let maxForCurrentPoint = duplicates;
        for (let count of slopeCount.values()) {
            maxForCurrentPoint = Math.max(maxForCurrentPoint, count + duplicates);
        }

        maxPointsOnLine = Math.max(maxPointsOnLine, maxForCurrentPoint);
    }

    return maxPointsOnLine;
};
