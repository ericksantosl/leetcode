/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = []
    for (let i = 0 ; i < nums.length ; i++) {
        for (let y = nums.length-1 ; y > 0 ; y--) {
            if (nums[i] + nums[y] === target && i !== y && i < y) {
                res.push(i)
                res.push(y)
            }
        }
    }

    return res
};

console.log(twoSum([3,2,4], 6))