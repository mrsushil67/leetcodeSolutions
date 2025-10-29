/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let result = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canFinish(piles, h, mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
}

function canFinish(piles, h, k) {
    let time = 0;
    for (let pile of piles) {
        time += Math.ceil(pile / k);
        if (time > h) return false;
    }
    return time <= h;
}