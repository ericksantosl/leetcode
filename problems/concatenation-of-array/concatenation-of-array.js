/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = nums
    nums.forEach(element => {
        ans.push(element)
    });

    return ans
};

console.log(getConcatenation([1, 2, 3]))