/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
 if (num === 0) return "Zero";

    const below20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", 
                    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",         "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Million", "Billion"];
    function helper(n) {
        let result = "";
        if (n >= 100) {
            result += below20[Math.floor(n / 100)] + " Hundred";
            n = n % 100;
            if (n > 0) result += " ";
        }
        if (n >= 20) {
            result += tens[Math.floor(n / 10)];
            n = n % 10;
            if (n > 0) result += " " + below20[n];
        } else if (n > 0) {
            result += below20[n];
        }
        return result;
    }

    let res = "";
    let i = 0;

    while (num > 0) {
        let chunk = num % 1000;
        if (chunk !== 0) {
            let chunkWords = helper(chunk);
            if (thousands[i] !== "") chunkWords += " " + thousands[i];
            if (res !== "") res = chunkWords + " " + res;
            else res = chunkWords;
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return res.trim();
}