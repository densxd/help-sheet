const crypto = require('crypto')
let result;
/**
 * @param { Array } array
*/
const Find = (array, key) => {
    if (!Array.isArray(array)) console.log(new Error(`Belirttiğin obje array değil.`))
    for (let i = 0; i < array.length; i++) {
        for (let lnt in array[i]) {
            for (let trp in array[i][lnt]) {
                if (array[i] == key) return array[i]
                else if (array[i][lnt] == key) return array[i][lnt]
                else if (array[i][lnt][trp] == key) return array[i][lnt][trp]
                else if (result == undefined) return result = array
                continue;
            }
        }
    }
}
/**
 * @param { Object[]} Obj
 */
const ObjFind = (Obj, key) => {
    if (Object.prototype.toString.call(Obj) !== "[object Array]" && Obj.length == undefined) return console.log(new Error(`Belirttiğin obje [object Array] değil.`));
    if (!Obj || !key) return console.log(new Error("Arrayı ve ya Keyini belirtmen gerek."))
    for (let i = 0; i < Obj.length; i++) {
        for (let lnt in Obj[i]) {
            if (Obj[i][key]) return result = Obj[i][key]
            else if (Obj[i][lnt][key]) return result = Obj[i][lnt][key]
        }
    }
}
/**
 * @param { Object{} } data
 * @param { Array[] } variable
 */
const EzPush = async (data, variable, item) => {
    if (!data || !variable || !item) return console.log(new Error("Argümanları doğru giriniz. Örn = KolayPush(data, Isimler, pushlanacak şey)"))
    try {
        variable.push(item)
        await data.save()
    } catch { }
}
/**
 * @param { Object{} } data
 * @param { String } variable
 */
const EzPull = async (data, variable, item) => {
    if (!data || !variable || !item) return console.log(new Error("Argümanları doğru giriniz. Örn = KolayPull(data, Isimler, çıkartılacak şey)"))
    try {
        data[variable] = data[variable].filter(x => x !== item)
        await data.save()
    } catch (err) { console.log(err) }
}
/**
 * @param { Array[] } array 
 */
const Shuffle = (array) => {
    return array[Math.floor((Math.random() * array.length))];
}

const Sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

const RandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

const RandomChar = (max, caps) => {
    let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if(caps){chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];}
    let value = "";
    for (let i = 0; i < max; i++) {
        value += Shuffle(chars)
    }
    return value;
}

const CheckReg = (content,option) => {
    let inviteRegex = /(https:\/\/)?(www\.)?(discord\.gg|discord\.me|discordapp\.com\/invite|discord\.com\/invite)\/([a-z0-9-.]+)?/i;  
    let linkRegex = /(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/gi;
    if(option && option == 'invite' || option == 'davet') return inviteRegex.test(content);
    else if(option && option == 'link') return linkRegex.test(content);

}
module.exports = { Find, ObjFind, EzPush, EzPull, Shuffle, Sleep, RandomNumber, RandomChar, CheckReg }
