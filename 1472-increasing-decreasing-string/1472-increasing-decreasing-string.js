/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let count = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++){
        count[s.charCodeAt(i)-97]++;
    }

    let result = "";
    let fulllength = s.length;

    while(fulllength > 0){
        for(let i = 0; i < 26; i++){
            if(count[i] > 0){
                result += String.fromCharCode(i + 97);
                count[i]--;
                fulllength--;
            }
        }
        for(let i = 25; i >= 0; i--){
            if(count[i] > 0){
                result += String.fromCharCode(i + 97);
                count[i]--;
                fulllength--;
            }
        }
    }
    return result;
};