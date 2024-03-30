/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X = 0
    operations.forEach(element => {
        if(element === '--X' || element === 'X--') {
            --X
        } else if (element === 'X++' || element === '++X') {
            X++
        }
    });
    return X
};

console.log(finalValueAfterOperations(["--X","X++","X++"]))