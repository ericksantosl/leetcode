/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let cont = []
    nums.forEach((element, index) => {
        let sum = 0
        for (let i = 0 ; i <= nums.length-1 ; i++) {
            if (element > nums[i] &&  element[index] !== nums[i]) {
                sum++
            }
        }
        cont.push(sum)
    });
    return cont
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))