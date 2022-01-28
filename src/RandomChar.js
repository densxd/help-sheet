// İstediğiniz kadar random karater oluşturma.

// Random karakter'de Caps özelliğini kullanmak için parametrelerde true/false geçirebilirsiniz. 
// Boş ise küçük verir.
const Shuffle = require('./Shuffle');
module.exports = function RandomChar(max, caps) {
    let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if (caps) { chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; }
    let value = "";
    for (let i = 0; i < max; i++) {
        value += Shuffle(chars)
    }
    return value;
}
