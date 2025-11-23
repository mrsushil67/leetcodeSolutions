/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    const result = new Array(num_people).fill(0);
    let currentCandy = 1;  // The starting number of candies to give
    let i = 0;  // Pointer to track the current person

    while (candies > 0) {
        // Determine how many candies to give the current person
        const give = Math.min(candies, currentCandy);
        
        // Distribute the candies to the current person
        result[i] += give;
        
        // Decrease the number of remaining candies
        candies -= give;

        // Move to the next person
        i = (i + 1) % num_people;

        // Increment the number of candies to be given in the next round
        currentCandy++;
    }

    return result;
}