/**
 * @param {string} s
 * @return {number[][]}
 */
function largeGroupPositions(s) {
  const result = [];
  let start = 0;

  for (let i = 0; i < s.length; i++) {

    if (i === s.length - 1 || s[i] !== s[i + 1]) {
      const groupLength = i - start + 1;
      if (groupLength >= 3) {
        result[result.length] = [start, i];
      }
      start = i + 1;
    }
  }

  return result;
}
