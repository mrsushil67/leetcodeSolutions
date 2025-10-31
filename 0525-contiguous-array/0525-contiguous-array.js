/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxLength(nums) {
  let count = 0;
  let maxLen = 0;
  const map = {};

  map[0] = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count -= 1;
    } else {
      count += 1;
    }

    if (map[count] !== undefined) {
      let length = i - map[count];
      if (length > maxLen) {
        maxLen = length;
      }
    } else {
      map[count] = i;
    }
  }

  return maxLen;
}