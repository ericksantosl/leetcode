/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let f = x.toString()
    let xString = f.split('')
    let aux = []

    for (let i = xString.length-1 ; i >= 0 ; i--) {
        aux.push(xString[i])
    }

    let a = xString.join()
    let b = aux.join()

    if (a === b) {
        return true
    } else {
        return false
    }
};

console.log(isPalindrome(12))