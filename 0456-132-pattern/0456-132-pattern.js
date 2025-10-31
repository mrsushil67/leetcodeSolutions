/**
 * @param {number[]} nums
 * @return {boolean}
 */
function find132pattern(nums) {
  let n = nums.length;
  if (n < 3) return false;
  
  let third = -Infinity;
  let stack = [];

  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] < third) {
      return true;
    }

    while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
      third = stack.pop();
    }

    stack.push(nums[i]);
  }

  return false;
}