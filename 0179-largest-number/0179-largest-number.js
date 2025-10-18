/**
 * @param {number[]} nums
 * @return {string}
 */
function largestNumber(nums) {
    let strs = [];
    for (let i = 0; i < nums.length; i++) {
        strs.push(String(nums[i]));
    }

    for (let i = 0; i < strs.length - 1; i++) {
        for (let j = i + 1; j < strs.length; j++) {
            let order1 = strs[i] + strs[j];
            let order2 = strs[j] + strs[i];
            if (order2 > order1) {
                let temp = strs[i];
                strs[i] = strs[j];
                strs[j] = temp;
            }
        }
    }

    if (strs[0] === "0") return "0";

    let result = "";
    for (let i = 0; i < strs.length; i++) {
        result += strs[i];
    }

    return result;
}
