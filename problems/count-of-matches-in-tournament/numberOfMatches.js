/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let matches = 0
    while (n > 1) {
        if (n % 2 === 0) {
            matches += n / 2
            n = n /2
        } else {
            matches += Math.floor(n / 2)
            n = (n-1)/2+1
        }
    }
    return matches
};

console.log(numberOfMatches(14))