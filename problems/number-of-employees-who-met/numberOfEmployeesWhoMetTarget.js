/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let met = 0
    hours.forEach(element => {
        if (element >= target) {
            met++
        }
    });
    return met
};

console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4], 2))