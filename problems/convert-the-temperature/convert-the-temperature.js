/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let fah = celsius * 1.8 + 32
    let kel = celsius + 273.15
    return [kel, fah]
};

console.log(convertTemperature(36.50))