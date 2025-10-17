/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
function getHint(secret, guess) {
    let bulls = 0;
    let cows = 0;

    let secretCount = {};
    let guessCount = {};

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        } else {
            secretCount[secret[i]] = (secretCount[secret[i]] || 0) + 1;
            guessCount[guess[i]] = (guessCount[guess[i]] || 0) + 1;
        }
    }

    for (let digit in guessCount) {
        if (secretCount[digit]) {
            cows += Math.min(secretCount[digit], guessCount[digit]);
        }
    }

    return `${bulls}A${cows}B`;
}
