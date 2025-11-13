/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const indexMap = new Map();
    const result = [];
    let minSum = Infinity;

    for (let i = 0; i < list1.length; i++) {
        indexMap.set(list1[i], i);
    }

    for (let j = 0; j < list2.length; j++) {
        if (indexMap.has(list2[j])) {
            const sum = j + indexMap.get(list2[j]);

            if (sum < minSum) {
                minSum = sum;
                result.length = 0;
                result.push(list2[j]);
            } else if (sum === minSum) {
                result.push(list2[j]);
            }
        }
    }

    return result;
}