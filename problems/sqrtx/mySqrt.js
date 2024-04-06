/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let sqrt = 0;
    for(let i = 1; x > 0; i += 2 ){
        x = x - i
        if (x >= 0) {
            sqrt++
        }
    }
    return sqrt
};

console.log(mySqrt(4))