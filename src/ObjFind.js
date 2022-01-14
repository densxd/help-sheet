/**
 * @param { Object } Obj
*/
let result;
// [ [ {"ID": "1"},{"NAME":"Dens"} ] ] İkili arreye kadar destekliyor.
module.exports = function ObjFind(Obj, key) {
    if (Object.prototype.toString.call(Obj) !== "[object Array]" && Obj.length == undefined) return console.log(new Error(`Belirttiğin obje [object Array] değil.`));
    if (!Obj || !key) return console.log(new Error("Arrayı ve ya Keyini belirtmen gerek."))
    for (let i = 0; i < Obj.length; i++) {
        for (let lnt in Obj[i]) {
            if (Obj[i][key]) return result = Obj[i][key]
            else if (Obj[i][lnt][key]) return result = Obj[i][lnt][key]
            if(result === undefined) return result = Obj
        }
    }
}