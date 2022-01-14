let result;
/**
 * @param { array[] } array
*/
module.exports = function Find(array, key) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === key) return result = array[i]
        for (let lnt in array[i]) {
            if (array[i][lnt] === key) return result = array[i][lnt]
            for (trp in array[i][lnt]) {
                if (array[i][lnt][trp] === key) return result = array[i][lnt][trp]
                if(result === undefined) return result = array
                continue;
            }
        }
    }
}