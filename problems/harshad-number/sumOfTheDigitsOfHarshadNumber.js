/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let arrNum = x.toString().split('').map(Number)
    let sum = 0

    arrNum.forEach(element => {
        sum += parseInt(element)
    });

    if (x % sum === 0 ) {
        return sum
    } else {
        return -1
    }
};



console.log(sumOfTheDigitsOfHarshadNumber(23))