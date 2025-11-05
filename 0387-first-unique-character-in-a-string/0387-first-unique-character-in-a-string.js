/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let count = {};

    for(let i = 0; i < s.length; i++ ){
        let ch = s[i];
        if(count[ch] === undefined){
            count[ch] = 1
        }
        else{
            count[ch]++;
        }
    }

    for(let i = 0; i < s.length; i++ ){
        if(count[s[i]] === 1){
            return i;
        }
    }

    return -1;
};