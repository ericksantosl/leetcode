/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let cont = 0
    let pedra = stones.split("")
    let joia = jewels.split("")
    pedra.forEach(elementP => {
        joia.forEach(elementJ => {
            if(elementP === elementJ) {
                cont++
            }
        });
    });
    return cont
};

console.log(numJewelsInStones("aA", "aAAbbbb"))