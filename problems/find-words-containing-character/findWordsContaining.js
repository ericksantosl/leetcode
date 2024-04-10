/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let cont = []
    words.forEach((element, index) => {
        if (element.includes(x)) {
            cont.push(index)
        }
    });
    return cont
};

console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "z"))