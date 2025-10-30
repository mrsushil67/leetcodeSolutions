/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
function carFleet(target, position, speed) {
    var n = position.length;
    if (n === 0) return 0;

    var cars = [];
    for (var i = 0; i < n; i++) {
        cars[i] = [position[i], speed[i]];
    }

    function mergeSort(arr) {
        if (arr.length <= 1) return arr;

        var mid = Math.floor(arr.length / 2);
        var left = mergeSort(arr.slice(0, mid));
        var right = mergeSort(arr.slice(mid));

        var merged = [];
        var i = 0, j = 0;

        while (i < left.length && j < right.length) {
            if (left[i][0] > right[j][0]) {
                merged.push(left[i++]);
            } else {
                merged.push(right[j++]);
            }
        }

        while (i < left.length) merged.push(left[i++]);
        while (j < right.length) merged.push(right[j++]);

        return merged;
    }

    cars = mergeSort(cars);

    var fleets = 0;
    var lastTime = 0;

    for (var i = 0; i < n; i++) {
        var pos = cars[i][0];
        var spd = cars[i][1];
        var time = (target - pos) / spd;

        if (time > lastTime) {
            fleets++;
            lastTime = time;
        }
    }

    return fleets;
}