/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let res = []
    candies.forEach((element) => {
        if ((element+extraCandies) >= Math.max(...candies)) {
            res.push(true)
        } else {
            res.push(false)
        }
    });
    return res
};

console.log(kidsWithCandies([2,3,5,1,3], 3))