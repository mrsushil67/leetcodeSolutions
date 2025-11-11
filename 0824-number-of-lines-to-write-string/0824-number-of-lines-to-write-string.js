/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */

function numberOfLines(widths, s) {
  let lines = 1;
  let currentWidth = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    
    const charIndex = c.charCodeAt(0) - 97;
    const w = widths[charIndex];

    if (currentWidth + w > 100) {
      lines++;
      currentWidth = w;
    } else {
      currentWidth += w;
    }
  }

  return [lines, currentWidth];
}
