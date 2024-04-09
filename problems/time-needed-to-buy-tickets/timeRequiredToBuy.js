/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let count = 0;
    for (let i = 0; tickets[k] > 0; i = (i + 1) % tickets.length) {
        if (tickets[i] > 0) {
            tickets[i]--;
            count++;
        }
    }

    return count;
};

console.log(timeRequiredToBuy([[2,3,2], 2]))