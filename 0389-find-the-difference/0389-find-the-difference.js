/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sumS = 0;
    let sumT = 0;

    for(let i = 0; i < s.length; i++){
        sumS += s[i].charCodeAt(0);
    }

    for(let j = 0; j < t.length; j++){
        sumT += t[j].charCodeAt(0);
    }

    return String.fromCharCode(sumT - sumS);

};