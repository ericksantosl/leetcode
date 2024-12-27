/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let seen = new Set();  
    let duplicates = new Set();

    nums.forEach(num => {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    });

    return Array.from(duplicates);
};

console.log(getSneakyNumbers([0,1,1]))       