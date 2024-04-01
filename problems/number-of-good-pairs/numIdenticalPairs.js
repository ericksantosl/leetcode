/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let cont = 0
    for (let i = 0 ; i < nums.length-1 ; i++) {
        for (let j = nums.length-1 ; j >= 0 ; j--) {
            if(nums[i] == nums[j] && i < j) {
                cont++
            }
        }
    }
    return cont
};

console.log(numIdenticalPairs([1,2,3,1,1,3]))