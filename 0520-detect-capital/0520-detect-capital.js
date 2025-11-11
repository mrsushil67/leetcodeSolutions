/**
 * @param {string} word
 * @return {boolean}
 */
 
function detectCapitalUse(word) {
  const isUpper = (ch) => ch >= 'A' && ch <= 'Z';
  const isLower = (ch) => ch >= 'a' && ch <= 'z';
  
  let allUpper = true;
  let allLower = true;
  let firstUpperRestLower = isUpper(word[0]);

  for (let i = 0; i < word.length; i++) {
    if (!isUpper(word[i])) allUpper = false;
    if (!isLower(word[i])) allLower = false;
    if (i > 0 && !isLower(word[i])) firstUpperRestLower = false;
  }

  return allUpper || allLower || firstUpperRestLower;
}
