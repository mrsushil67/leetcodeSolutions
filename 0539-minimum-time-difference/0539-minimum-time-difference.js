/**
 * @param {string[]} timePoints
 * @return {number}
 */
function findMinDifference(timePoints) {
  const minutes = [];
  for (let t of timePoints) {
    const parts = t.split(":");
    const h = parseInt(parts[0]);
    const m = parseInt(parts[1]);
    minutes.push(h * 60 + m);
  }

  minutes.sort((a, b) => a - b);

  let minDiff = 1440;
  for (let i = 1; i < minutes.length; i++) {
    const diff = minutes[i] - minutes[i - 1];
    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  const wrapDiff = 1440 - minutes[minutes.length - 1] + minutes[0];
  if (wrapDiff < minDiff) {
    minDiff = wrapDiff;
  }

  return minDiff;
}