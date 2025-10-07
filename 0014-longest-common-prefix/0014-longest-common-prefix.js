/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";

    let pre = "";
    let firstStr = strs[0];

    for(let i=0;i<firstStr.length; i++){
        let char = firstStr[i];
        let isCommonStr = true
        for( let j = 0; j < strs.length; j++){
            if(i>= strs[j].length || strs[j][i] !== char){
                isCommonStr = false;
                break;
            }
        }
        if(!isCommonStr) break;
        pre = pre+char;
    }
    return pre;
};