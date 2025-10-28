/**
 * @param {string[]} words
 * @return {number}
 */
function maxProduct(words) {
    const n = words.length;
    const bitMasks = [];
    
    for (let i = 0; i < n; i++) {
        let mask = 0;
        for (let j = 0; j < words[i].length; j++) {
            const char = words[i][j];
            const bitIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
            mask |= (1 << bitIndex);
        }
        bitMasks.push({ mask, length: words[i].length });
    }
    
    let maxProduct = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((bitMasks[i].mask & bitMasks[j].mask) === 0) {
                const product = bitMasks[i].length * bitMasks[j].length;
                maxProduct = Math.max(maxProduct, product);
            }
        }
    }
    
    return maxProduct;
}