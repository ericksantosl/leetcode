/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let arr = s.split("");
    let val = []
    let cont = 0
    arr.forEach(element => {
        val.push(element.charCodeAt(0))
    });
    for (let i = 0 ; i < val.length-1 ; i++) {
        cont += (Math.abs(val[i] - val[i+1]))
    }
    return cont
};

console.log(scoreOfString("zaz"))