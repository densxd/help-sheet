/**
 * @param { Array[] } array 
 */

// İstediğin arrayi karıştırma.
module.exports = function Shuffle(array) {
    return array[Math.floor((Math.random() * array.length))];
}